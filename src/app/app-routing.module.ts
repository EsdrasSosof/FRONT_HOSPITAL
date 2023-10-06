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
import { HistorialmedComponent } from './pages/historialmed/historialmed.component';
import { MotivosComponent } from './pages/motivos/motivos.component';
import { MotivosCrearComponent } from './pages/motivos/motivos-crear/motivos-crear.component';
import { MotivosEditComponent } from './pages/motivos/motivos-edit/motivos-edit.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { ConsultasCrearComponent } from './pages/consultas/consultas-crear/consultas-crear.component';
import { ConsultasEditComponent } from './pages/consultas/consultas-edit/consultas-edit.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ReportesConsultasComponent } from './pages/reportes/reportes-consultas/reportes-consultas.component';
import { ReportesHistorialComponent } from './pages/reportes/reportes-historial/reportes-historial.component';
import { DiagnosticoComponent } from './pages/diagnostico/diagnostico.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { GraficaComponent } from './components/grafica/grafica.component';

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
	{ path: 'historiales', component: HistorialmedComponent, canActivate: [AuthGuardService]},
	{ path: 'motivos', component: MotivosComponent, canActivate: [AuthGuardService]},
	{ path: 'motivos/motivos-crear', component: MotivosCrearComponent, canActivate: [AuthGuardService]},
	{ path: 'motivos/motivos-edit/:id', component: MotivosEditComponent, canActivate: [AuthGuardService]},
	{ path: 'consultas', component: ConsultasComponent, canActivate: [AuthGuardService]},
	{ path: 'consultas/consultas-crear', component: ConsultasCrearComponent, canActivate: [AuthGuardService]},
	{ path: 'consultas/consultas-edit/:id', component: ConsultasEditComponent, canActivate: [AuthGuardService]},
	{ path: 'reportes', component: ReportesComponent, canActivate: [AuthGuardService]},
	{ path: 'reportes/reportes-consulta', component: ReportesConsultasComponent, canActivate: [AuthGuardService]},
	{ path: 'reportes/reportes-historial', component: ReportesHistorialComponent, canActivate: [AuthGuardService]},
	{ path: 'diagnostico', component: DiagnosticoComponent, canActivate: [AuthGuardService]},
	{ path: 'receta', component: RecetaComponent, canActivate: [AuthGuardService]},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
