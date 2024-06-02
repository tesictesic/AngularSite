import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-single-page',
  templateUrl: './product-single-page.component.html',
  styleUrl: './product-single-page.component.css'
})
export class ProductSinglePageComponent implements OnInit {
   products:any=[];
   product:any|null=null;
   product_stars:number[]=[];
  constructor(
    private http:HttpClient,
    private activated_route:ActivatedRoute
  ){}
  ngOnInit(): void {
    let product_id=this.activated_route.snapshot.paramMap.get('id');
    this.http.get("../assets/data/products.json").subscribe({
      next:(data)=>{
        this.products=data;
        for(let element of this.products){
          if(element.id==product_id){
            console.log(element);
            this.product=element;
          }
        }
        for(let i=0;i<this.product.stars;i++){
          this.product_stars.push(i+1);
        }
      },
      error:(error)=>{console.log(error)}
    })
  }
}
