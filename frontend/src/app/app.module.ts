import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './common/User.service';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AddPacienteComponent } from './add-paciente/add-paciente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PacienteService } from './add-paciente/add-paciente.service';
import { PacienteListaService } from './pacientes/paciente.service';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material'; 

const rutas: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'addPaciente', component: AddPacienteComponent },
  { path: 'pacientes', component: PacientesComponent },
 { path: '',   redirectTo: 'pacientes', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    PacientesComponent,
    AddPacienteComponent
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(
      rutas
    ),
    BrowserAnimationsModule
  ],
  providers: [ MatDatepickerModule, LoginService, UserService, PacienteService, PacienteListaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
