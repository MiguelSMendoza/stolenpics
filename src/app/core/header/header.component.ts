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
    if (this.isURL(url)) {
      this.picService.addPicture(url).subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('Your Image has been included on your album', 'Image Added');
          element.value = '';
        }
      );
    } else {
      return false;
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
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
  }

}
