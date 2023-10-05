import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  constructor(
    public auth: AuthService,
    public router: Router,
    private event: EventService,
  ) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      this.event.publish('session:auth', { auth: 'logout' });
      return false;
    }
    return true;
  }
  
}
