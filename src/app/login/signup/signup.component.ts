import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/core/model/usuario.model';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  titulo:string = "Sign up";

  registrado:boolean = false;

  formularioRegistro!:FormGroup;

  constructor(private userService:UserService,private formBuilder: FormBuilder, private messageService:MessageService){}
  ngOnInit(): void {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  get nombre(){return this.formularioRegistro.get('nombre')}
  get apellidos(){return this.formularioRegistro.get('apellidos')}
  get email(){return this.formularioRegistro.get('email')}
  get password(){return this.formularioRegistro.get('password')}




  registrarse(){
    const usuario:Usuario = {
      nombre:this.formularioRegistro.value.nombre,
      apellidos:this.formularioRegistro.value.apellidos,
      email:this.formularioRegistro.value.email,
      password:this.formularioRegistro.value.password
    }
    this.userService.addUser(usuario).subscribe(
      (response) => {
        console.log("Se ha guardado el usuario " + response);
        this.registrado = true;
      },
      (error) =>{
        this.messageService.add({ key: 'myKey2', severity: 'warn', summary: 'Error', detail: error.error.message,life:10000 });
      }
    )

  }

}
