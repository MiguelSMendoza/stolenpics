import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from 'firebase';
import { PicsService } from '../../pics/pics.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed: boolean;
  isAuthenticated: boolean;
  username: string;
  uid: string;

  constructor(private authService: AuthService,
    private picService: PicsService,
    public toastr: ToastsManager) {
    this.authService.user.subscribe(
      (user: User) => {
        this.isAuthenticated = (user) ? true : false;
        if (this.isAuthenticated) {
          this.username = user.displayName;
          this.uid = user.uid;
        }
      }
    );
   }

  onAddPicture(element) {
    const url = element.value;
    if (this.isURL(url) && this.isImage(url)) {
      this.picService.addPicture(url).subscribe(
        (response) => {
          if (!response) {
            this.toastr.warning('Your Image is already included on your album', 'Image Exists');
          } else {
            this.toastr.success('Your Image has been included on your album', 'Image Added');
          }
          element.value = '';
        }
      );
    } else {
      this.toastr.error('Not a valid URL', 'Error');
      element.value = '';
    }
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  isURL(str) {
    const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return pattern.test(str);
  }

  isImage(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

}
