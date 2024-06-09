import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDashboardComponent } from './components/cart-dashboard/cart-dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CartDashboardComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule,
    SharedModule
  ]
})
export class CartModule { }
