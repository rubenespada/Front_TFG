import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre:any;




ngOnInit(): void {
  this.loadNombrePerfil();
}







loadNombrePerfil(){
  let perfil = localStorage.getItem("nombre");
  if(perfil != null)
  this.nombre = localStorage.getItem("nombre");
}

}
