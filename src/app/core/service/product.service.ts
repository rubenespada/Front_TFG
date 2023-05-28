import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

getAllProduct(){
  return this.http.get(environment.baseUrl + "api/v1/product");
}

updateProduct(product:Product){
  return this.http.put(environment.baseUrl + "api/v1/product/" + product.id,product);
}

createProduct(product:Product){
  return this.http.post(environment.baseUrl + "api/v1/product/",product);
}

deleteProduct(idProduct:number){
  return this.http.delete(environment.baseUrl + "api/v1/product/" + idProduct);

}



}
