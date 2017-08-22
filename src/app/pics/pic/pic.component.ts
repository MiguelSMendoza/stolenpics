import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PicsService } from '../pics.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
export class PicComponent implements OnInit {
  heartState = 'normal';
  saveState = 'normal';
  imageSRC = 'assets/broken.jpg';
  close: boolean;

  @Input() picture;
  @ViewChild('imageObject') imageObject;

  constructor(private picService: PicsService,
    public toastr: ToastsManager) { }

  ngOnInit() {
    if (!this.picture.likes) {
      this.picture.likes = {};
    }
    if (!this.picture.thiefs) {
      this.picture.thiefs = {};
    }
    this.imageSRC = this.picture.url;
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

  onLike(picture) {
    this.heartState = 'clicked';
  }

  onLikeDone(event, picture) {
    if (event.fromState === 'normal') {
      this.heartState = 'normal';
      this.picService.likePicture(picture);
    }
  }

  onSave(picture) {
    this.saveState = 'clicked';
    this.picService.savePicture(picture);
  }

  onSaveDone(event, picture) {
    if (event.fromState === 'normal') {
      this.saveState = 'normal';
      this.picService.savePicture(picture);
    }
  }

}
