import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PicsService } from '../pics.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Subscription } from "rxjs/Subscription";
import { Picture } from "../../model/picture.model";
import { FirebaseObjectObservable } from "angularfire2/database";

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        transform: 'translateX(0) scale(1)',
        opacity: 1
      })),
      state('clicked', style({
        transform: 'translateX(0) scale(0.5)',
        opacity: 0
      })),
      transition('normal => clicked', animate(300)),
      transition('clicked => normal', animate(10)),
    ])
  ]
})
export class PicComponent implements OnInit, OnDestroy {
  heartState = 'normal';
  saveState = 'normal';
  imageSRC = 'assets/broken.jpg';
  subscription: Subscription;
  close: boolean;
  picture;

  @Input('key') key;
  @ViewChild('imageObject') imageObject;

  constructor(private picService: PicsService,
    public toastr: ToastsManager) { }

  ngOnInit() {
    this.subscription = this.picService.getPictureByKey(this.key).subscribe(
      (picture) => {
        this.picture = picture;
        if (!this.picture.likes) {
          this.picture.likes = {};
        }
        if (!this.picture.thiefs) {
          this.picture.thiefs = {};
        }
        this.imageSRC = this.picture.url;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onRemove() {
    this.picService.removePicture(this.picture).catch(
      () => {
        this.toastr.error('An Error has ocurred.', 'Error');
      }
    ).then(
      (response) => {
        this.toastr.info('Image has been removed.', 'Removed');
      }
    );
  }

  canDelete() {
    return this.picService.canDelete(this.picture);
  }

  updateUrl(event) {
    event.preventDefault();
    this.imageSRC = 'assets/broken.jpg';
    return true;
  }

  onLike() {
    this.heartState = 'clicked';
  }

  onLikeDone($event, picture) {
    if ($event.fromState === 'normal') {
      this.heartState = 'normal';
      this.picService.likePicture(picture);
    }
  }

  onSave() {
    this.saveState = 'clicked';
  }

  onSaveDone($event, picture) {
    if ($event.fromState === 'normal') {
      this.saveState = 'normal';
      this.picService.savePicture(picture);
    }
  }

}
