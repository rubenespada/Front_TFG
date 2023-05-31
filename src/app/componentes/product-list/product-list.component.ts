import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { environment } from 'src/app/core/environment/environment';
import { Product } from 'src/app/core/model/product.model';
import { AccountService } from 'src/app/core/service/account.service';
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

  formularioProducto!:FormGroup;

  modificar:boolean = false;

  cuentaCompra:any;


  constructor(private productService:ProductService, private purchaseService:PurchaseService, private authService:AuthService, private formBuilder: FormBuilder,private imageService:ImageService, private accountService:AccountService,private messageService:MessageService){}

  ngOnInit(): void {
    this.loadProductList();
    this.loadAccount();
    this.admin = this.authService.isAdmin();
    this.formularioProducto = this.formBuilder.group({
      id:null,
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      stock: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['']
    });
  }

  get nombre(){return this.formularioProducto.get('nombre');}
  get descripcion(){return this.formularioProducto.get('descripcion');}
  get stock(){return this.formularioProducto.get('stock');}
  get precio(){return this.formularioProducto.get('precio');}


  loadProductList(){
    this.productService.getAllProduct().subscribe(response => {
      this.productList = response;
      console.log(this.productList);
    },
    (error) => {
      console.log(error);
    })
  }

  loadAccount(){
    this.accountService.retrieveAccount().subscribe(response => {
      this.cuentaCompra = response;
    },
    (error => {
      console.log(error);
    })
    )
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
      this.loadProductList();
      this.modalCompra = false;
      this.messageService.add({ key: 'myKey1', severity: 'success', summary: 'Compra realizada', detail: 'Compra realizada con éxito',life:10000 });
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
      this.formularioProducto.value.imagen = file;
    }
    
  }


  loadForm(product:any){
    if (product){
      this.formularioProducto = this.formBuilder.group({
        id:[product.id],
        nombre: [product.nombre, Validators.required],
        descripcion: [product.descripcion, Validators.required],
        stock: [product.stock, Validators.required],
        precio: [product.precio, Validators.required],
        imagen: ['']
      });
    }else{
      this.formularioProducto = this.formBuilder.group({
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
      id: this.formularioProducto.value.id,
      nombre: this.formularioProducto.value.nombre,
      descripcion: this.formularioProducto.value.descripcion,
      stock: this.formularioProducto.value.stock,
      precio: this.formularioProducto.value.precio,
      imagen: this.formularioProducto.value.imagen.name
    }
    if(this.modificar){
      this.productService.updateProduct(body).subscribe(response => {
        console.log(response);
        if(this.formularioProducto.value.imagen){
          this.uploadImageProduct();
        }
        this.hideModalModificacion();
        this.loadProductList();
        this.messageService.add({ key: 'myKey4', severity: 'success', summary: 'Producto modificado', detail: 'Producto modificado con éxito',life:10000 });
      },
      (error =>{
        console.log(error);
      })
      );
    }else{
        this.productService.createProduct(body).subscribe(response => {
          if(this.formularioProducto.value.imagen){
            this.uploadImageProduct();
          }
          this.hideModalModificacion();
          this.loadProductList();
          this.messageService.add({ key: 'myKey3', severity: 'success', summary: 'Producto creado', detail: 'Producto creado con éxito',life:10000 });
        },
        (error =>{
          console.log(error);
        })
        );
    }
  }

  uploadImageProduct(){
    let image = new FormData();
    image.append('file',this.formularioProducto.value.imagen);
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
      if(error.status == 409){
        this.messageService.add({ key: 'myKey2', severity: 'warn', summary: 'Error', detail: error.error.message,life:10000 });
      }else{
        this.loadProductList();}
      
    })
    )
  }
  }



