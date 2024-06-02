import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrl: './products-filters.component.css'
})
export class ProductsFiltersComponent implements OnInit {
  categories:any=[];
  brands:any=[];
  filters_sort_array:any={
    brand:[],
    category:[]

  }
  @Output() izlaz_filteri=new EventEmitter();
 constructor(
    private http:HttpClient
 ){}
 ngOnInit(): void {
     this.http.get("assets/data/category.json").subscribe({
      next:(data)=>{this.categories=data},
      error:(error)=>{console.log(error)}
     });
     this.http.get("assets/data/brand.json").subscribe({
      next:(data)=>{this.brands=data},
      error:(error)=>{console.log(error)}
     })
 }
 onFilterChange():void{
  this.izlaz_filteri.emit(this.filters_sort_array);
 }
 onBrandChange(value:string,isCheked:boolean){
  let id_number=parseInt(value);
  if(isCheked){
    
    this.filters_sort_array.brand.push(id_number);
  }
  else{
    const index = this.filters_sort_array.brand.indexOf(id_number);
    if (index > -1) {
      this.filters_sort_array.brand.splice(index, 1);
    }
  }
  this.onFilterChange();

 }
 onCategoryChange(value:string,isCheked:boolean){
  let id_number=parseInt(value);
  if(isCheked){
    
    this.filters_sort_array.category.push(id_number);
  }
  else{
    const index = this.filters_sort_array.category.indexOf(id_number);
    if (index > -1) {
      this.filters_sort_array.category.splice(index, 1);
    }
  }
  this.onFilterChange();
 }
}
