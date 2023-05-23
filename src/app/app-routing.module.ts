import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
const routes: Routes = [
  {path:'dashboard',loadChildren:() => import ('./features/dashboard/dashboard.module').then((m)=> m.DashboardModule)},
  {path:'auth',loadChildren:() => import ('./features/dashboard-login/dashboard-login.module').then((m)=> m.DashboardLoginModule)},
  {path:'**', redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }