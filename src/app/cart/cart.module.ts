import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDashboardComponent } from './components/cart-dashboard/cart-dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';


@NgModule({
  declarations: [
    CartDashboardComponent,
    CheckoutFormComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule,
  ]
})
export class CartModule { }
