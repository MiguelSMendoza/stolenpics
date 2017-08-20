import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
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
  totalBooks: string[];
  books: string[];
  next = 0;
  uid = '';

  constructor(
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

  }

  ngOnDestroy(): void {
   // this.subscription.unsubscribe();
  }

  doNext() {
    if (this.next < this.totalBooks.length) {
      this.books.push(this.totalBooks[this.next++]);
    }
  }

}
