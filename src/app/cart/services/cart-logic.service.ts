import { Injectable } from '@angular/core';
import { CartItem } from '../interface/cart-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartLogicService {
  private cartItems: CartItem[] = [];
  cartItems$ = new BehaviorSubject<CartItem[]>(this.getCartItemsFromLocalStorage());
  cartext$=new BehaviorSubject<string>('');
  carCheckout$=new BehaviorSubject<boolean>(false);
  checkout_clicked:boolean=false;

  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      this.cartext$.next("You have successfull updated quantity of product ");
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
      this.cartext$.next("You have successfull added product to cart");
    }
    this.saveCartItemsToLocalStorage();
    this.cartItems$.next(this.cartItems);
    this.getTotalCount();
  }
 updateQuantity(item:CartItem,value:number){
  const existingItem=this.cartItems.find(i=>i.id===item.id);
  if(existingItem){
    existingItem.quantity=value;
  }
  this.getTotalPrice();
 }
  removeFromCart(itemId: number) {
    this.cartItems = this.cartItems.filter(i => i.id !== itemId);
    this.saveCartItemsToLocalStorage();
    this.cartItems$.next(this.cartItems);
    this.getTotalCount();
  }

  getTotalPrice(): number {
    let sum=0;
    this.cartItems.forEach(x=>{
      sum+=x.price.current*x.quantity
    });
    console.log(sum);
    return sum;
    
  }

  getTotalCount(): number {
    return this.getCartItemsLengthToLocalStorage();
  }

  removeAll() {
    this.cartItems = [];
    this.saveCartItemsToLocalStorage();
    this.cartItems$.next(this.cartItems);
    this.getTotalCount();
  }
  Checkout():void{
    this.removeAll();
    this.checkout_clicked=true;
    this.carCheckout$.next(this.checkout_clicked);
  }

  private saveCartItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    localStorage.setItem('cartItemLength',this.cartItems.length.toString())
  }

  private getCartItemsFromLocalStorage(): CartItem[] {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  }
  private getCartItemsLengthToLocalStorage():number{
    const item_length=localStorage.getItem('cartItemLength');
    if(item_length){
      return parseInt(item_length,10);
    }
    return 0
  }

  constructor() { }
}
