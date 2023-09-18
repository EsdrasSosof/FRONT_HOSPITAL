import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(
    private readonly auth: AuthService,
    private readonly event: EventService,
    private router: Router,
    private spinner: NgxSpinnerService
    ) { }

  public login(f: NgForm): void {
    if (f.valid) {
      const params = f.value;

      this.validate(params.username, params.password);
      
      return;
    } else {
      console.error('invalid');
    }
  }

private async validate(username: string, password: string): Promise<void> {
  try {
    await this.spinner.show();

    const userExist = await this.auth.getUserInfo(username, password);

    if (userExist) {
      this.event.publish('session:auth', { auth: '/api/auth/login' });
      this.router.navigate(['home']);
    } else {
      alert('Usuario no existe');
    }
  } catch (error) {
    console.error('Error en la autenticación:', error);
  } finally {
    await this.spinner.hide();
  }
}

}