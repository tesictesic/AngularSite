import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDashboardComponent } from './components/category-dashboard/category-dashboard.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:CategoryDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
