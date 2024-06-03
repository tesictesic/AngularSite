import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProductDashboardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
