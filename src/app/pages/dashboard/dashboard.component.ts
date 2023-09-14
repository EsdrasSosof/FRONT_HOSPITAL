import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  constructor(
    private readonly auth: AuthService,
    private readonly event: EventService,
    private router: Router
  ) { }

  public logout(): void {
    this.auth.removeSession();
    this.event.publish('session:auth', { auth: 'logout' });
    this.router.navigateByUrl('login');
  }

}
