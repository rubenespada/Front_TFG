import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DashboardLoginComponent } from './dashboard-login.component';
import { LoginComponent } from 'src/app/login/login/login.component';
import { SignupComponent } from 'src/app/login/signup/signup.component';

const routes: Routes = [
  {path:'',component:DashboardLoginComponent,children:[
    {path:'',component:LoginComponent},
    {path:'signup',component:SignupComponent}
    

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardLoginRoutingModule { }