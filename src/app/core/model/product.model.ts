export class Product{

    id:number = 0;
    nombre:string = "";
    descripcion:string = "";
    stock:number = 0;
    precio:number = 0;
    imagen:string = "";


    constructor(id:number){
        this.id = id;
    }

}