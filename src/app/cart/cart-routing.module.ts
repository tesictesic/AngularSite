import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDashboardComponent } from './components/cart-dashboard/cart-dashboard.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:CartDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
