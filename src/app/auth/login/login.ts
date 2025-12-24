import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private auth: AuthService, private router: Router) { }

  login(username: string) {
    this.auth.login(username);

    // 🔁 Redirect to attempted URL OR role dashboard
    const target =
      this.auth.redirectUrl ??
      (this.auth.hasRole('ADMIN') ? '/admin' : '/user');

    this.auth.redirectUrl = null;
    this.router.navigate([target]);
  }
}
