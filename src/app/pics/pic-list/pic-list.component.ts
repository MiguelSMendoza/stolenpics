import { Component, OnInit, OnDestroy } from '@angular/core';
import { PicsService } from '../pics.service';
import { Picture } from '../../model/picture.model';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.css']
})
export class PicListComponent implements OnInit, OnDestroy {
  pictures: Picture[];
  subscription: Subscription[];
  user: string;
  username: string;
  userPictures: boolean;

  constructor(private picService: PicsService,
    private route: ActivatedRoute,
    private router: Router) {
      this.subscription = [];
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
                  this.pictures = pictures;
                  if (this.pictures.length > 0) {
                    this.username = this.pictures[0].owner.name;
                    this.userPictures = true;
                  }
                }
              )
            );
          } else {
            this.subscription.push(
              this.picService.pictures.subscribe(
                (pictures) => {
                  this.pictures = pictures;
                }
              )
            );
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

}
