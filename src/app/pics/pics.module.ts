import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicListComponent } from './pic-list/pic-list.component';
import { PicComponent } from './pic/pic.component';
import { PicsService } from './pics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PicListComponent, PicComponent],
  exports: [PicListComponent, PicComponent],
  providers: [
    PicsService
  ]
})
export class PicsModule { }
