import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductSinglePageComponent } from './components/product-single-page/product-single-page.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    component:ProductsComponent
  },
  {
    path:':id',
    component:ProductSinglePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
