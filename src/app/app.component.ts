import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { EventService } from './services/event/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public session!: boolean;

	constructor(
		private auth: AuthService,
		private event: EventService
	) {
		this.event.subscribe('session:auth', (args) => {
			this.session = args.auth === 'logout' ? false : true;
		});
	}

	ngOnInit() {
		this.session = this.auth.isAuthenticated();
	}
}
