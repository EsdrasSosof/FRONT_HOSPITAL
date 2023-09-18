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
import { PersonalCreateComponent } from './pages/medicos/personal-create/personal-create.component';
import { EspecCreateComponent } from './pages/especializaciones/espec-create/espec-create.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
	{ path: 'home', component: SummaryComponent, canActivate: [AuthGuardService] },
	{ path: 'medicos', component: MedicosComponent, canActivate: [AuthGuardService] },
	{ path: 'medicos/personal-create', component: PersonalCreateComponent, canActivate: [AuthGuardService] },
	{ path: 'especializaciones', component: EspecializacionesComponent, canActivate: [AuthGuardService] },
	{ path: 'especializaciones/espec-create', component: EspecCreateComponent, canActivate: [AuthGuardService] },
	{ path: 'pacientes', component: PacientesComponent, canActivate: [AuthGuardService]},
	{ path: 'medicinas', component: MedicinasComponent, canActivate: [AuthGuardService]},
	{ path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuardService]},
	{ path: 'roles', component: RolesComponent, canActivate: [AuthGuardService]},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
