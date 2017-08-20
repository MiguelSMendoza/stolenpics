import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PicListComponent } from './pic-list/pic-list.component';

const picsRoutes: Routes = [
  {
    path: '',
    component: PicListComponent,
  },
  {
    path: ':id',
    component: PicListComponent
  },
];

@NgModule ({
    imports: [
        RouterModule.forChild(picsRoutes)
    ],
    exports: [RouterModule]
})
export class PicsRoutingModule { }
