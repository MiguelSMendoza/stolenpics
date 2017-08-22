import { Injectable } from '@angular/core';
import { Picture } from '../model/picture.model';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../auth/auth.service';
import { User, Promise } from 'firebase';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Thief } from '../model/thief.model';

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

     getUserPictures(username: string) {
      return this.pictures.map(
        (pictures) => {
          return pictures.filter(
            (data) => {
              let found = false;
              if (data.hasOwnProperty('thiefs')) {
                Object.keys(data.thiefs).forEach(function(key) {
                    if (data.thiefs[key].username === username) {
                      found = true;
                    }
                });
              }
              return found;
            }
          );
        }
      );
     }

     getUserAsThief() {
      return new Thief(
        this.user.uid,
        this.user.providerData[0]['uid'],
        this.user.displayName,
        this.user.photoURL
      );
     }

     likePicture(picture: Picture) {
      const hash = btoa(picture.url);
      if (!this.isAuthenticated || picture.likes[this.user.uid]) {
        return new Promise((resolve, reject) => {
          resolve('false');
        });
      }
      return this.db.object('/pictures/' + hash + '/likes/' + this.user.uid)
      .set(this.getUserAsThief());
     }

     savePicture(picture: Picture) {
      const hash = btoa(picture.url);
      if (!this.isAuthenticated
        || picture.thiefs[this.user.uid]
        || picture.owner.uid === this.user.uid) {
        return new Promise((resolve, reject) => {
          resolve('false');
        });
      }
      return this.db.object('/pictures/' + hash + '/thiefs/' + this.user.uid)
      .set(this.getUserAsThief());
     }

     addPicture(url: string) {
       return this.getPicture(url).map(
        (pictureObject) => {
          const hash = btoa(url);
          if (!pictureObject.$exists()) {
            const picture = new Picture(
              url,
              [],
              this.getUserAsThief(),
              [],
              + new Date()
            );
            this.db.object('/pictures/' + hash).set(picture);
            return this.db.object('/pictures/' + hash + '/thiefs/' + this.user.uid)
            .set(this.getUserAsThief());
          } else {
            return this.savePicture(pictureObject);
          }
        }
       );
    }

    isURL(str) {
      const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      return pattern.test(str);
    }

    getPicture(url: string) {
      const hash = btoa(url);
      return this.db.object('/pictures/' + hash).first();
    }

}
