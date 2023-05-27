import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http:HttpClient) { }


makePurchase(prouctId:number,cantidadComprada:number){
  let idCliente = localStorage.getItem('id');
  

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
