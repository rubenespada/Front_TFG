import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { map } from 'rxjs';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }


  login(email:string, password:string){
    const body = {
      email:email,
      password:password
    }
    return this.http.post("http://localhost:8081/login",body,{observe: 'response'}).pipe(
      map((response) => {
        const  JWTtoken = response.headers.get('Authorization');
        let jwtDecoded:any = jwt_decode(JWTtoken!);
        localStorage.setItem('Token',JWTtoken!);
        localStorage.setItem('nombre',jwtDecoded.nombre);
        localStorage.setItem('admin',jwtDecoded.admin);
        localStorage.setItem('id',jwtDecoded.id);
        return 1;
      })
      
    );
    
  }

  logout(){
    localStorage.removeItem('Token');
  }

  getToken():string{
    return localStorage.getItem('Token')!;
  }

  isLoggedIn():boolean{
    if(this.getToken() != null && this.getToken() != ''){
      return true;
    }else{
      return false;
    }
  }

  


}