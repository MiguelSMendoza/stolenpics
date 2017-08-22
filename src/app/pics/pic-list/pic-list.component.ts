import { Component, OnInit, OnDestroy } from '@angular/core';
import { PicsService } from '../pics.service';
import { Picture } from '../../model/picture.model';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.css'],
  animations: [
    trigger(
      'listItem', [
        transition(':enter', [
          style({ transform: 'translateX(-10px)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    )
  ]
})
export class PicListComponent implements OnInit, OnDestroy {
  allPictures: Picture[];
  pictures: Picture[];
  subscription: Subscription[];
  user: string;
  username: string;
  userPictures: boolean;
  next = 0;

  constructor(private picService: PicsService,
    private route: ActivatedRoute,
    private router: Router) {
      this.subscription = [];
      this.allPictures = [];
      this.pictures = [];
      this.userPictures = false;
     }

  ngOnInit() {
    this.subscription.push(
      this.route.params.subscribe(
        (params: Params) => {
          this.user = params['id'];
          if (this.user) {
            this.subscription.push(
              this.picService.getUserPictures(
                this.user
              ).subscribe(
                (pictures) => {
                  if (pictures.length > 0) {
                    this.initPictures(pictures);
                    const user = this.user;
                    let name = '';
                    Object.keys(pictures[0].thiefs).forEach(function(key) {
                      if (pictures[0].thiefs[key].username === user) {
                        name = pictures[0].thiefs[key].name;
                      }
                    });
                    this.username = name;
                    this.userPictures = true;
                  }
                }
              )
            );
          } else {
            this.subscription.push(
              this.picService.pictures.subscribe(
                (pictures) => {
                  this.initPictures(pictures);
                }
              )
            );
          }
        })
    );
  }

  initPictures(pictures) {
    if (this.allPictures.length !== pictures.length) {
      this.allPictures = pictures.reverse();
      this.pictures = [];
      this.next = 0;
      this.doNext();
    }
  }

  doNext() {
    if (this.next < this.allPictures.length) {
      this.pictures.push(this.allPictures[this.next++]);
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

}
