import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../../cart/interface/cart-item';
import { CartLogicService } from '../../../cart/services/cart-logic.service';
import { ProductModalServiceService } from '../../../shared/service/product-modal-service.service';
import { Product } from '../../interfaces/product';
type Brand = number[];
type Category = number[];
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
   products:Product[]=[];
   isDisabledPrevious=false;
   isDisabledNext=false;
   paginate_products:any=[];
   number_of_page:number|null=null;
   number_of_page_array:number[]=[];
   per_page:number=9;
   current_page:number=1;
   filter_and_sort_from_child: { brand: Brand, category: Category } = { brand: [], category: [] };
   sort_choose:string="";
   options: string[] = ['Choose', 'Name ASC', 'Name DESC', 'Price ASC', 'Price DESC'];
   cartText:string="";
   cartItems:CartItem[]=[];
   totalPrice:number=0;

sorted(value:string):void{
 this.sort_choose=value;
 console.log(this.sort_choose);
 if(this.sort_choose!='Choose'){
  this.filter_sort();
 }

}
  constructor(
    private router:Router,
    private product_service:ProductService,
    private cartService:CartLogicService,
    private modal_cart:ProductModalServiceService
   
  ){}
  ngOnInit(): void {
      this.product_service.getProducts().subscribe({
        next:(data)=>{
          this.products=data
          this.number_of_page = Math.ceil(this.products.length / this.per_page);
          for(let i=0;i<this.number_of_page;i++){
            this.number_of_page_array.push(i);
          };
          console.log(this.number_of_page_array)
          this.updatePaginatedProducts();
        },
        error:(error)=>{console.log(error)}
      })
      if(this.current_page<=1) this.isDisabledPrevious=true;
      
      
  }
  backFromChild(emit:any){
    this.filter_and_sort_from_child=emit;
    console.log(this.filter_and_sort_from_child);
    this.filter_sort();
  }
  
  filter_sort():void{
    let brands=this.filter_and_sort_from_child.brand
    let categories=this.filter_and_sort_from_child.category
    let sort_ddl=this.sort_choose;
    let filteredProducts = this.products;

    if (brands.length > 0) {
      filteredProducts = filteredProducts.filter(product => brands.includes(product.brand_id));
    }

    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter(product => categories.includes(product.category_id));
    }
    if(sort_ddl!='Choose'){
      if(sort_ddl=="Name ASC") filteredProducts=filteredProducts.sort((a,b)=> a.productName.localeCompare(b.productName))
      else if(sort_ddl=="Name DESC") filteredProducts=filteredProducts.sort((a,b)=> b.productName.localeCompare(a.productName))
     else if(sort_ddl=='Price ASC') filteredProducts=filteredProducts.sort((a,b)=> a.price.current - b.price.current)
    else if(sort_ddl=='Price DESC') filteredProducts=filteredProducts.sort((a,b)=> b.price.current - a.price.current)
    }
    console.log(this.sort_choose);
    console.log(filteredProducts);
    this.paginate_products=filteredProducts;
    console.log(this.paginate_products);
    //this.updatePaginatedProducts();

  }
  singlePageRedirect(id:number):void{
    this.router.navigate(["/products",id])
  }
  calculateDiscount(old_price:number,current_price:number){
    const discount = ((old_price - current_price) / old_price) * 100;
    return Math.round(discount);
  }
  
  movePrevious():void{
    if (this.current_page > 1) {
      this.current_page--;
      if(this.current_page<=1) this.isDisabledPrevious=true;
     this.isDisabledNext=false;
      this.updatePaginatedProducts();
    }
  }
  moveNext():void{
    if (this.current_page < Math.ceil(this.products.length / this.per_page)) {
      this.current_page++;
      this.isDisabledPrevious=false;
      if(this.current_page >= Math.ceil(this.products.length / this.per_page)) this.isDisabledNext=true;
      this.updatePaginatedProducts();
    }
  }
  updatePaginatedProducts(): void {
    const startIndex = (this.current_page - 1) * this.per_page;
    const endIndex = startIndex + this.per_page;
    this.paginate_products = this.products.slice(startIndex, endIndex);
    console.log(this.products);
  }
  addToCart(item:CartItem){
    this.cartService.addToCart(item);
    this.cartService.cartext$.subscribe(item=>{
      this.cartText=item
    })
    this.modal_cart.changeTextToCart(this.cartText);
    this.modal_cart.changeModalStatus(false);
    setTimeout(() => {
      this.modal_cart.changeModalStatus(true);  
    }, 2000);
    
  }  


}
