import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryDashboardComponent } from './components/category-dashboard/category-dashboard.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CategoryDashboardComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
