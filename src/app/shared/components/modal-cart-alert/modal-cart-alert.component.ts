import { Component, OnInit } from '@angular/core';
import { ProductModalServiceService } from '../../service/product-modal-service.service';

@Component({
  selector: 'app-modal-cart-alert',
  templateUrl: './modal-cart-alert.component.html',
  styleUrl: './modal-cart-alert.component.css'
})
export class ModalCartAlertComponent implements OnInit {
   modal_text:string="";
   isDisabledModal:boolean=true;
 constructor(private product_modal_service:ProductModalServiceService){}

 ngOnInit(): void {
    this.product_modal_service.modalText$.subscribe(item=>{
      this.modal_text=item;
    })
    this.product_modal_service.isDisabledModal$.subscribe(item=>{
      this.isDisabledModal=item
    })
 }
 
}
