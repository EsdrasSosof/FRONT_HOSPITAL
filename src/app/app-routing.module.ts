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
import { PersonalEditComponent } from './pages/medicos/personal-edit/personal-edit.component';
import { PacientesCrearComponent } from './pages/pacientes/pacientes-crear/pacientes-crear.component';
import { MedicinasCrearComponent } from './pages/medicinas/medicinas-crear/medicinas-crear.component';
import { PacientesEditComponent } from './pages/pacientes/pacientes-edit/pacientes-edit.component';
import { EspecEditComponent } from './pages/especializaciones/espec-edit/espec-edit.component';
import { MedicinasEditComponent } from './pages/medicinas/medicinas-edit/medicinas-edit.component';
import { RolesCrearComponent } from './pages/roles/roles-crear/roles-crear.component';
import { RolesEditComponent } from './pages/roles/roles-edit/roles-edit.component';
import { UsuariosCrearComponent } from './pages/usuarios/usuarios-crear/usuarios-crear.component';
import { UsuariosDitComponent } from './pages/usuarios/usuarios-dit/usuarios-dit.component';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
	{ path: 'home', component: SummaryComponent, canActivate: [AuthGuardService] },
	{ path: 'medicos', component: MedicosComponent, canActivate: [AuthGuardService] },
	{ path: 'medicos/personal-create', component: PersonalCreateComponent, canActivate: [AuthGuardService] },
	{ path: 'medicos/personal-edit/:id', component: PersonalEditComponent, canActivate: [AuthGuardService] },
	{ path: 'especializaciones', component: EspecializacionesComponent, canActivate: [AuthGuardService] },
	{ path: 'especializaciones/espec-create', component: EspecCreateComponent, canActivate: [AuthGuardService] },
	{ path: 'especializaciones/espec-edit/:id', component: EspecEditComponent, canActivate: [AuthGuardService] },
	{ path: 'pacientes', component: PacientesComponent, canActivate: [AuthGuardService]},
	{ path: 'pacientes/pacientes-crear', component: PacientesCrearComponent, canActivate: [AuthGuardService]},
	{ path: 'pacientes/pacientes-edit/:id', component: PacientesEditComponent, canActivate: [AuthGuardService]},
	{ path: 'medicinas', component: MedicinasComponent, canActivate: [AuthGuardService]},
	{ path: 'medicinas/medicinas-crear', component: MedicinasCrearComponent, canActivate: [AuthGuardService]},
	{ path: 'medicinas/medicinas-edit/:id', component: MedicinasEditComponent, canActivate: [AuthGuardService]},
	{ path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuardService]},
	{ path: 'usuarios/usuarios-crear', component: UsuariosCrearComponent, canActivate: [AuthGuardService]},
	{ path: 'usuarios/usuarios-edit/:id', component: UsuariosDitComponent, canActivate: [AuthGuardService]},
	{ path: 'roles', component: RolesComponent, canActivate: [AuthGuardService]},
	{ path: 'roles/roles-crear', component: RolesCrearComponent, canActivate: [AuthGuardService]},
	{ path: 'roles/roles-edit/:id', component: RolesEditComponent, canActivate: [AuthGuardService]},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
