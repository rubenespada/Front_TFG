import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import * as jwt_decode from 'jwt-decode';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

titulo:string = "Login"

cuadroEmail:string = "";

cuadroPassword:string = "";

constructor(private authService:AuthService,private router:Router,private messageService:MessageService){

}


enviarFormulario(){
  this.authService.login(this.cuadroEmail,this.cuadroPassword).subscribe(
    (response) => {
    this.irADashboard();
    },
    (error) => {
      if(error.status == 0){
        this.messageService.add({ key: 'myKey1', severity: 'warn', summary: 'Error', detail: "Servidor inoperativo",life:10000 });

      }else{
        this.messageService.add({ key: 'myKey1', severity: 'warn', summary: 'Error', detail: "Datos incorrectos",life:10000 });
      }
    }
  );

}

irADashboard(){
  this.router.navigate(['/dashboard'])
}




}

