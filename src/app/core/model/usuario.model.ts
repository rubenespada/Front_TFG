export class Usuario{
    nombre:string = "";
    apellidos:string = "";
    email:string = "";
    password:string = "";

    constructor(email:string,password:string){
        this.email = email;
        this.password = password;
    }
}