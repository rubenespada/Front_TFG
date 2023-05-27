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

}
