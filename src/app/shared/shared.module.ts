import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { ModalContactFormComponent } from './components/modal-contact-form/modal-contact-form.component';
import { ModalCartAlertComponent } from './components/modal-cart-alert/modal-cart-alert.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    ModalContactFormComponent,
    ModalCartAlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AdminDashboardComponent,
    ModalContactFormComponent,
    ModalCartAlertComponent
  ]
})
export class SharedModule { }
