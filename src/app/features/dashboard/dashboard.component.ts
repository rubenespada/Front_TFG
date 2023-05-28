import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre:any;


constructor(private router:Router){}

ngOnInit(): void {
  this.loadNombrePerfil();
}



logout(){
  localStorage.clear();
  this.router.navigate(['/auth']);
}



loadNombrePerfil(){
  let perfil = localStorage.getItem("nombre");
  if(perfil != null)
  this.nombre = localStorage.getItem("nombre");
}

}
