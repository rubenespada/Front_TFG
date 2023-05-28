import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/core/model/account.model';
import { AccountService } from 'src/app/core/service/account.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  userAccount!:any;
  nombreUsuario:any = localStorage.getItem('nombre');
  modalSaldo:boolean = false;
  modalCuenta:boolean = false;
  ingreso:number = 0;

constructor(private accountService:AccountService){}



  ngOnInit(): void {
    this.loadUserAccount();
  }

loadUserAccount(){
  this.accountService.retrieveAccount().subscribe(response => {
    this.userAccount = response;
  },
  (error => {
    console.log(error);
  })
  )
}

showModalSaldo(){
  this.modalSaldo = true;
}

hideModalSaldo(){
  this.modalSaldo = false;
  this.ingreso = 0;
}

showModalCuenta(){
  this.modalCuenta = true;
}

hideModalCuenta(){
  this.modalCuenta = false;
  this.ingreso = 0;
}

modificarSaldo(){
  this.accountService.updateSaldo(this.ingreso).subscribe(response => {
  },
  (error => {
    this.loadUserAccount();
    this.hideModalSaldo();
  })
  )

  }

  crearCuenta(){
    this.accountService.setAccount(this.ingreso).subscribe(response => {
      this.loadUserAccount();
    },
    (error => {
      console.log(error);
    })
    )
  }

}


