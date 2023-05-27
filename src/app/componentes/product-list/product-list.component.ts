import { Component, OnInit } from '@angular/core';
import { environment } from 'src/app/core/environment/environment';
import { Product } from 'src/app/core/model/product.model';
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

  modal = false;

  product?:Product;

  cantidad:number = 0;

  constructor(private productService:ProductService, private purchaseService:PurchaseService){}

  ngOnInit(): void {
    this.loadProductList();
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

  showModal(selectedProduct:Product){
    this.product = selectedProduct
    this.modal = true;
  }

  hideModal(){
    this.modal = false;
  }

  realizarCompra(productId:number,cantidadComprada:number){
    this.purchaseService.makePurchase(productId,cantidadComprada).subscribe(response => {
      this.modal = false;
    },
    (error => {
      console.log(error);
    }))
    
  }
  

  setTotal(precio:string){
    return parseFloat(precio).toFixed(2);
  }



  



}
