import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDashboardComponent } from './components/cart-dashboard/cart-dashboard.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:CartDashboardComponent
  },
  {
    path:"checkout",
    component:CheckoutFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
