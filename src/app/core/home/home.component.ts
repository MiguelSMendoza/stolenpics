import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { BooksService } from '../../books/books.service';
import { Book } from '../../books/model/book.model';
import { AuthService } from '../../auth/auth.service';
import { User } from 'firebase';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger(
      'listItem', [
        transition(':enter', [
          style({ transform: 'translateY(-10px)', opacity: 0}),
          animate('200ms', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    )
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  totalBooks: Book[];
  books: Book[];
  next = 0;
  uid = '';

  constructor(
    private booksService: BooksService,
    private authService: AuthService,
    public toastr: ToastsManager
  ) {
    this.books = [];
    this.totalBooks = [];
    this.authService.user.subscribe(
      (user: User) => {
        if (user) {
          this.uid = user.uid;
        } else {
          this.uid = '';
        }
      }
    );
   }

  ngOnInit() {
    this.subscription = this.booksService.books.subscribe(
      books => {
        if (this.totalBooks.length !== books.length) {
          this.totalBooks = books.reverse();
          this.books = [];
          this.next = 0;
          this.doNext();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  doNext() {
    if (this.next < this.totalBooks.length) {
      this.books.push(this.totalBooks[this.next++]);
    }
  }

  onTrade(book: Book) {
    if (this.uid === '') {
      this.authService.login();
      return false;
    }
    this.booksService.tradeBook(book)
    .catch(
      (error) => {
        this.toastr.error(error.message, error.name);
      }
    )
    .then(
      () => {
        this.toastr.success('Now you have to wait until the owner accepts the trade.', 'Trade Saved');
      }
    );
  }

  onAcceptTrade(book) {
    this.booksService.acceptTradeBook(book)
    .catch(
      (error) => {
        this.toastr.error(error.message, error.name);
      }
    )
    .then(
      () => {
        this.toastr.success('Now your book doesn\'t belong to you.', 'Trade Accepted');
      }
    );
  }

  onCancelTrade(book: Book) {
    this.booksService.unTradeBook(book)
    .catch(
      (error) => {
        this.toastr.error(error.message, error.name);
      }
    )
    .then(
      () => {
        this.toastr.warning('Trade Cancelled Succesffully', 'Trade Cancel');
      }
    );
  }

}
