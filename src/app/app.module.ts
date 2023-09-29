import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { EspecializacionesComponent } from './pages/especializaciones/especializaciones.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { ModalComponent } from './components/modal/modal.component';
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
import { RolesEditComponent } from './pages/roles/roles-edit/roles-edit.component';
import { RolesCrearComponent } from './pages/roles/roles-crear/roles-crear.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LinkComponent,
    LoginComponent,
    DashboardComponent,
    SummaryComponent,
    MedicosComponent,
    EspecializacionesComponent,
    PacientesComponent,
    ModalComponent,
    MedicinasComponent,
    UsuariosComponent,
    RolesComponent,
    PersonalCreateComponent,
    EspecCreateComponent,
    PersonalEditComponent,
    PacientesCrearComponent,
    MedicinasCrearComponent,
    PacientesEditComponent,
    EspecEditComponent,
    MedicinasEditComponent,
    RolesEditComponent,
    RolesCrearComponent,
    UsuariosCrearComponent,
    UsuariosDitComponent,
    HistorialmedComponent,
    MotivosComponent,
    MotivosCrearComponent,
    MotivosEditComponent,
    ConsultasComponent,
    ConsultasCrearComponent,
    ConsultasEditComponent,
    ReportesComponent,
    ReportesConsultasComponent,
    ReportesHistorialComponent,
    DiagnosticoComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    NgbModule,
  ],
  providers: [
    NgbActiveModal,NgbModalConfig,NgbModal
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
