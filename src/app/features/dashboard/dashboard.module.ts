import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
//import { FormularioProjectComponent } from 'src/app/components/formulario-project/formulario-project.component';
//import { ListadoProjectComponent } from 'src/app/components/listado-project/listado-project.component';
//import { FormularioCodeComponent } from 'src/app/components/formulario-code/formulario-code.component';
//import { ListadoCodeComponent } from 'src/app/components/listado-code/listado-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { ProductListComponent } from 'src/app/componentes/product-list/product-list.component';
import { CuentaComponent } from 'src/app/componentes/cuenta/cuenta.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseListComponent } from 'src/app/componentes/purchase-list/purchase-list.component';
import { TableModule } from 'primeng/table';






@NgModule({
  declarations: [
    //Aqui todos los componentes del dashboard
    DashboardComponent,
    ProductListComponent,
    CuentaComponent,
    PurchaseListComponent,
    //FormularioProjectComponent,
    //ListadoProjectComponent,
    //FormularioCodeComponent,
    //ListadoCodeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatIconModule,
    RouterModule ,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule

    
  ]
})
export class DashboardModule { }