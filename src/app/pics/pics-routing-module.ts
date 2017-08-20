import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PicListComponent } from './pic-list/pic-list.component';

const picsRoutes: Routes = [
  {
    path: '',
    component: PicListComponent,
  },
  {
    path: 'pics',
    loadChildren: 'app/pics/pics.module#PicsModule'
  },
];

@NgModule ({
    imports: [
        RouterModule.forRoot(picsRoutes, {
          preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class PicsRoutingModule { }
