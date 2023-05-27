import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {





  constructor(private http:HttpClient) { }


retrieveAccount(){
  let idCliente = localStorage.getItem('id');
  return this.http.get(environment.baseUrl + "api/v1/user/account/" + idCliente);
}

}
