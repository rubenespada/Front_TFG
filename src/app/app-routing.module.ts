import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
const routes: Routes = [
  {path:'dashboard',loadChildren:() => import ('./features/dashboard/dashboard.module').then((m)=> m.DashboardModule)},
  {path:'login',component:LoginComponent},
  {path:'**', redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }