import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ContactModule { }
