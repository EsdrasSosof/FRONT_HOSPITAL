import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuardService } from './guards/login/login.guard';
import { AuthGuardService } from './guards/auth/auth.guard';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
	{ path: 'home', component: SummaryComponent, canActivate: [LoginGuardService] },
	//{ path: 'home', component: SummaryComponent, canActivate: [AuthGuardService] },
	//{ path: 'home', component: SummaryComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
