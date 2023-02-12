import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.message = this.getMessage();
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        // Redirect the user
        let returnUrl = this.route.snapshot.paramMap.get('returnUrl');
        console.log(returnUrl);
        if (!returnUrl) {
          returnUrl = this.authService.redirectUrl;
          console.log(returnUrl);
        }
        console.log(returnUrl);
        this.router.navigate([returnUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
