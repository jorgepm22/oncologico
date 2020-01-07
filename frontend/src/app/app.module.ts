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

const rutas: Routes = [
  { path: 'home', component: SidenavComponent },
  { path: 'login', component: LoginComponent },
 { path: '',   redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      rutas
    )
  ],
  providers: [ LoginService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
