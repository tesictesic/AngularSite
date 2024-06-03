import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AdminDashboardComponent
  ]
})
export class SharedModule { }
