import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFiltersComponent } from './components/products-filters/products-filters.component';
import { ProductSinglePageComponent } from './components/product-single-page/product-single-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFiltersComponent,
    ProductSinglePageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[ProductService]
})
export class ProductsModule { }
