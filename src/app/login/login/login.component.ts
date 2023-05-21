import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

titulo:string = "Login"

cuadroEmail:string = "";

cuadroPassword:string = "";

constructor(private authService:AuthService,private router:Router){

}


enviarFormulario(){
  this.authService.login(this.cuadroEmail,this.cuadroPassword).subscribe(
    (response) => {
    console.log(this.cuadroEmail);
    console.log(this.cuadroPassword);
    this.irADashboard();
    }
  );

}

irADashboard(){
  this.router.navigate(['/dashboard'])
}




}

