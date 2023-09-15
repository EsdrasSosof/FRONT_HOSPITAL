import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuardService } from './guards/login/login.guard';
import { AuthGuardService } from './guards/auth/auth.guard';
import { SummaryComponent } from './pages/summary/summary.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { EspecializacionesComponent } from './pages/especializaciones/especializaciones.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { MedicinasComponent } from './pages/medicinas/medicinas.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
	{ path: 'home', component: SummaryComponent, canActivate: [LoginGuardService] },
	{ path: 'medicos', component: MedicosComponent },
	{ path: 'especializaciones', component: EspecializacionesComponent },
	{ path: 'pacientes', component: PacientesComponent},
	{ path: 'medicinas', component: MedicinasComponent},
	{ path: 'usuarios', component: UsuariosComponent},
	{ path: 'roles', component: RolesComponent},
	// { path: 'home', component: SummaryComponent, canActivate: [AuthGuardService] },
	//{ path: 'home', component: SummaryComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
