import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { map } from 'rxjs';

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
        localStorage.setItem('Token',JWTtoken!);
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