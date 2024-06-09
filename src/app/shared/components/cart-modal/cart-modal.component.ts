import { Component, OnInit } from '@angular/core';
import { CartLogicService } from '../../../cart/services/cart-logic.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent implements OnInit {
  isDisabledModal:boolean=true;
  checked:boolean=false;
  constructor(private cart:CartLogicService){}
  changeModalStatus():void{
    this.isDisabledModal=!this.isDisabledModal;
  }
  ngOnInit(): void {
    this.cart.carCheckout$.subscribe(item=>{
      this.checked=this.cart.checkout_clicked
      if(this.checked) this.changeModalStatus();
    })
      
  }
  CloseModal(){
    this.changeModalStatus();
  }
}
