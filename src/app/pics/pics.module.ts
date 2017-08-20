import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicsListComponent } from './pic-list/pic-list.component';
import { PicComponent } from './pic/pic.component';
import { PicsService } from './pics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PicListComponent, PicComponent],
  providers: [
    PicsService
  ]
})
export class PicsModule { }
