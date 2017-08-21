import { Injectable } from '@angular/core';
import { Picture } from './picture.model';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { User } from 'firebase';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class PicsService {
  isAuthenticated: boolean;
  pictures: FirebaseListObservable<Picture[]>;
  user: User;

  constructor(private db: AngularFireDatabase,
    private authService: AuthService) {
      this.pictures = db.list('/pictures', {
        query: {
          orderByChild: 'timestamp',
        }
      });
      this.authService.user.subscribe(
        (user: User) => {
          this.isAuthenticated = (user) ? true : false;
          if (this.isAuthenticated) {
            this.user = user;
          } else {
            this.user = null;
          }
        }
      );
     }

     addPicture(url: string) {
       return this.getPicture(url).map(
        (pictures) => {
          if (pictures.length === 0) {
            const picture = new Picture(
              url,
              [this.user.uid],
              this.user.displayName,
              this.user.photoURL,
              0,
              + new Date()
            );
            return this.pictures.push(picture);
          } else {
            const pic = pictures[0];
            if (pic.uid.indexOf(this.user.uid) < 0 ) {
              pic.uid.push(this.user.uid);
              return pic.update();
            } else {
              return false;
            }
          }
        }
       );
    }

    getPicture(url: string) {
      return this.db.list('/pictures', {
        query: {
          orderByChild: 'url',
          equalTo: url
        }
      }
      );
    }

}
