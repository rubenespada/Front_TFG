import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


addUser(usuario:Usuario){
  return this.http.post("http://localhost:8081/api/v1/user",usuario);
}

}
