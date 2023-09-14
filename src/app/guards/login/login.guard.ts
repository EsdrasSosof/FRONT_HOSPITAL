import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    const isAuthenticated = this.auth.isAuthenticated();
    if (isAuthenticated) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

}
