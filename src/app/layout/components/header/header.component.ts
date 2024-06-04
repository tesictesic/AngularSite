import { Component, OnInit } from '@angular/core';
import { CartLogicService } from '../../../cart/services/cart-logic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {
  
  constructor(private cartService:CartLogicService){}
  totalCountOfShoppingCart:number=0;
  ngOnInit(): void {
      this.cartService.cartItems$.subscribe(item=>{
        this.totalCountOfShoppingCart=this.cartService.getTotalCount();
      })
  }
}
