import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"products"
  },
  {
    path:"products",
    loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:"categories",
    loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)
  },
  {
    path:"brands",
    loadChildren:()=>import('./brands/brands.module').then(m=>m.BrandsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
