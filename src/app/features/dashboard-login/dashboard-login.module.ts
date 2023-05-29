import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { DashboardLoginRoutingModule } from './dashboard-login-routing.module';
import { DashboardLoginComponent } from './dashboard-login.component';
import { LoginComponent } from 'src/app/login/login/login.component';
import { SignupComponent } from 'src/app/login/signup/signup.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    //Aqui todos los componentes del dashboard
    DashboardLoginComponent,
    LoginComponent,
    SignupComponent

  ],
  imports: [
    CommonModule,
    DashboardLoginRoutingModule,
    FormsModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class DashboardLoginModule { }