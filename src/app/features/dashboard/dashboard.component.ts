import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre:any;

  admin:boolean = false;


constructor(private router:Router,private authService:AuthService){}

ngOnInit(): void {
  this.loadNombrePerfil();
  this.admin = this.authService.isAdmin();
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
