import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/app/core/environment/environment';
import { Product } from 'src/app/core/model/product.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { ImageService } from 'src/app/core/service/image.service';
import { ProductService } from 'src/app/core/service/product.service';
import { PurchaseService } from 'src/app/core/service/purchase.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:any;

  mediaPath:string = environment.mediaPath;

  admin:boolean = false;

  modalCompra = false;

  modalModificacion = false;

  product!:Product;

  cantidad:number = 1;

  formualarioProducto!:FormGroup;

  modificar:boolean = false;


  constructor(private productService:ProductService, private purchaseService:PurchaseService, private authService:AuthService, private formBuilder: FormBuilder,private imageService:ImageService){}

  ngOnInit(): void {
    this.loadProductList();
    this.admin = this.authService.isAdmin();
    this.formualarioProducto = this.formBuilder.group({
      id:null,
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      stock: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['']
    });
  }

  loadProductList(){
    this.productService.getAllProduct().subscribe(response => {
      this.productList = response;
      console.log(this.productList);
    },
    (error) => {
      console.log(error);
    })
  }

  showModalCompra(selectedProduct:Product){
    this.product = selectedProduct;
    this.modalCompra = true;
  }

  hideModalCompra(){
    this.modalCompra = false;
  }

  showModalModificacion(selectedProduct?:Product){
    this.modalModificacion = true;
    if(selectedProduct){
      this.modificar = true;
    }else{
      this.modificar = false;
    }
    this.loadForm(selectedProduct);
    
    
  }

  
  hideModalModificacion(){
    this.modalModificacion = false;
  }

  realizarCompra(productId:number,cantidadComprada:number){
    this.purchaseService.makePurchase(productId,cantidadComprada).subscribe(response => {
      this.modalCompra = false;
    },
    (error => {
      console.log(error);
    }))
    
  }


  realizarModificacion(){

  }
  

  setTotal(precio:string){
    return parseFloat(precio).toFixed(2);
  }

  onFileSelected(event:any) {
    const file = event.target.files[0];
    if(file){
      this.formualarioProducto.value.imagen = file;
    }
    
  }


  loadForm(product:any){
    if (product){
      this.formualarioProducto = this.formBuilder.group({
        id:[product.id],
        nombre: [product.nombre, Validators.required],
        descripcion: [product.descripcion, Validators.required],
        stock: [product.stock, Validators.required],
        precio: [product.precio, Validators.required],
        imagen: ['']
      });
    }else{
      this.formualarioProducto = this.formBuilder.group({
        id:null,
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        stock: ['', Validators.required],
        precio: ['', Validators.required],
        imagen: ['']
      });
    }



  }

  enviarFormularioModificacion(){
    const body:Product = {
      id: this.formualarioProducto.value.id,
      nombre: this.formualarioProducto.value.nombre,
      descripcion: this.formualarioProducto.value.descripcion,
      stock: this.formualarioProducto.value.stock,
      precio: this.formualarioProducto.value.precio,
      imagen: this.formualarioProducto.value.imagen.name
    }
    if(this.modificar){
      this.productService.updateProduct(body).subscribe(response => {
        console.log(response);
        if(this.formualarioProducto.value.imagen){
          this.uploadImageProduct();
        }
        this.hideModalModificacion();
        this.loadProductList();
      },
      (error =>{
        console.log(error);
      })
      );
    }else{
        this.productService.createProduct(body).subscribe(response => {
          if(this.formualarioProducto.value.imagen){
            this.uploadImageProduct();
          }
          this.hideModalModificacion();
          this.loadProductList();
        },
        (error =>{
          console.log(error);
        })
        );
    }
  }

  uploadImageProduct(){
    let image = new FormData();
    image.append('file',this.formualarioProducto.value.imagen);
    this.imageService.uploadFile(image).subscribe(response => {
      console.log(response);
    },
    (error => {
      console.log(error);
    })
    )
  }

  deleteProduct(idProduct:number){
    this.productService.deleteProduct(idProduct).subscribe(response => {
    },
    (error => {
      this.loadProductList();
      console.log(error);
    })
    )
  }
  }



