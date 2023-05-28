import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private authService:AuthService,private http:HttpClient) { }



getClientPurchases(){
  let idCliente = this.authService.getUserId();
  return this.http.get(environment.baseUrl + "api/v1/userProduct/user/" + idCliente);
}

makePurchase(prouctId:number,cantidadComprada:number){
  let idCliente = this.authService.getUserId();
  const body = {
    shopUser: {
      id:idCliente
    },
    product: {
      id:prouctId
    },
    cantidad:cantidadComprada
  };
  return this.http.post(environment.baseUrl + 'api/v1/userProduct',body);
}

}
