import { Component } from '@angular/core';
import { Usuario } from 'src/app/core/model/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService:UserService){}

  titulo:string = "Sign up";

  cuadroNombre:string = "";

  cuadroApellidos:string = "";

  cuadroEmail:string = "";
  
  cuadroPassword:string = "";

  registrado:boolean = false;

  registrarse(){
    const usuario:Usuario = {
      nombre:this.cuadroNombre
      ,apellidos:this.cuadroApellidos
      ,email:this.cuadroEmail
      ,password:this.cuadroPassword
    }
    this.userService.addUser(usuario).subscribe(
      (response) => {
        console.log("Se ha guardado el usuario " + response);
        this.registrado = true;
      },
      (error) =>{
        console.log("Error: " + error);
      }
    )

  }

}
