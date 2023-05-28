import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/core/service/purchase.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {


purchases:any;


constructor(private pruchaseService:PurchaseService){}

  ngOnInit(): void {
    this.loadPurchses();
  }

  loadPurchses(){
    this.pruchaseService.getClientPurchases().subscribe(response => {
      this.purchases = response;
    },
    (error => {
      console.log(error);
    })
    )
  }



}
