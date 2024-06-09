import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartLogicService } from '../../../cart/services/cart-logic.service';
import { ProductModalServiceService } from '../../../shared/service/product-modal-service.service';
import { CartItem } from '../../../cart/interface/cart-item';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-single-page',
  templateUrl: './product-single-page.component.html',
  styleUrl: './product-single-page.component.css'
})
export class ProductSinglePageComponent implements OnInit {
   products:any=[];
   product:any|null=null;
   product_stars:number[]=[];
   related_products:Product[]=[];
  cartText: string="";
  constructor(
    private http:HttpClient,
    private router:Router,
    private activated_route:ActivatedRoute,
    private cartService:CartLogicService,
    private modal_cart:ProductModalServiceService,
  ){}
  ngOnInit(): void {
    let product_id=this.activated_route.snapshot.paramMap.get('id');
    this.http.get("../assets/data/products.json").subscribe({
      next:(data)=>{
        this.products=data;
        for(let element of this.products){
          if(element.id==product_id){
            this.product=element;
          }
        }
        for(let i=0;i<this.product.stars;i++){
          this.product_stars.push(i+1);
        }
        for(let elemet of this.products){
          if (elemet.brand_id===this.product.brand_id) {
            if(!(elemet.productName.toLowerCase()===this.product.productName.toLowerCase())){
              console.log(elemet);
              this.related_products.push(elemet);  
            }
            
        }
        }
        console.log(this.related_products);
      },
      error:(error)=>{console.log(error)}
    })
   
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
    redirectToProduct(id: number) {
      this.router.navigate(['/products']).then(() => {
        this.router.navigate(['/products', id]);
      });

    }
    
  } 
