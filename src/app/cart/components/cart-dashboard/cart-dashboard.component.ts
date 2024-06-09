import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../interface/cart-item';
import { CartLogicService } from '../../services/cart-logic.service';
import { Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-cart-dashboard',
  templateUrl: './cart-dashboard.component.html',
  styleUrl: './cart-dashboard.component.css'
})
export class CartDashboardComponent implements OnInit {

    cartItems:CartItem[]=[];
    totalPrice:number=0;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','price','delete'];
    dataSource = this.cartService.cartItems$

    constructor(private router:Router ,private cartService:CartLogicService){}
    ngOnInit(): void {
      this.cartService.cartItems$.subscribe(item=>{
        console.log(item);
        this.cartItems=item;
        this.totalPrice=this.cartService.getTotalPrice();

      })
  }
  removeFromCart(itemId:number):void{
    this.cartService.removeFromCart(itemId);
  }
  removeAll():void{
    this.cartService.removeAll();
  }
  Checkout(){
    this.cartService.Checkout();
  }
  updateQuantity(item:CartItem, value:string){
    let value_int=parseInt(value);
    this.cartService.updateQuantity(item,value_int);
     this.cartService.cartItems$.subscribe(item=>{
      this.totalPrice=this.cartService.getTotalPrice();
     })
  }
   
}

