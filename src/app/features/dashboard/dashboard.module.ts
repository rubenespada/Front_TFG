import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
//import { FormularioProjectComponent } from 'src/app/components/formulario-project/formulario-project.component';
//import { ListadoProjectComponent } from 'src/app/components/listado-project/listado-project.component';
//import { FormularioCodeComponent } from 'src/app/components/formulario-code/formulario-code.component';
//import { ListadoCodeComponent } from 'src/app/components/listado-code/listado-code.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    //Aqui todos los componentes del dashboard
    DashboardComponent,
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
    RouterModule
  ]
})
export class DashboardModule { }