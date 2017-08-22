import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicListComponent } from './pic-list/pic-list.component';
import { PicComponent } from './pic/pic.component';
import { PicsService } from './pics.service';
import { PicsRoutingModule } from './pics-routing-module';
import { KeysPipe } from './keys.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PicListComponent, PicComponent, KeysPipe],
  exports: [PicListComponent, PicComponent, PicsRoutingModule],
  providers: [
    PicsService
  ]
})
export class PicsModule { }
