import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicListComponent } from './pic-list/pic-list.component';
import { PicComponent } from './pic/pic.component';
import { PicsService } from './pics.service';
import { PicsRoutingModule } from './pics-routing-module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PicListComponent, PicComponent],
  exports: [PicListComponent, PicComponent, PicsRoutingModule],
  providers: [
    PicsService
  ]
})
export class PicsModule { }
