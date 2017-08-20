import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service';
import { AppRoutingModule } from '../app-routing-module.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './home/home.component';
import { PicsModule } from '../pics/pics.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PicsModule
  ],
  declarations: [HeaderComponent, HomeComponent],
  exports: [HeaderComponent, AppRoutingModule],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
