import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ProductListComponent } from 'src/app/componentes/product-list/product-list.component';
import { CuentaComponent } from 'src/app/componentes/cuenta/cuenta.component';
import { PurchaseListComponent } from 'src/app/componentes/purchase-list/purchase-list.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'productList',component:ProductListComponent},
    {path:'account',component:CuentaComponent},
    {path:'purchases',component:PurchaseListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }