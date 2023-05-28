import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import { environment } from '../environment/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {





  constructor(private http:HttpClient, private authService:AuthService) { }


retrieveAccount(){
  let idCliente = this.authService.getUserId();
  return this.http.get(environment.baseUrl + "api/v1/user/account/" + idCliente);
}


setAccount(ingreso:number){
  let idCliente = this.authService.getUserId();
  const body = {
    saldo:ingreso
  };
  return this.http.put(environment.baseUrl + "api/v1/user/" + idCliente + "/account",body);
}


updateSaldo(ingreso:number){
  let idCliente = this.authService.getUserId();
  const body = {
    saldo:ingreso
  };
  return this.http.put(environment.baseUrl + "api/v1/user/account/" + idCliente, body);
  
}

}
