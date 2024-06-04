import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {merge} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { ContactModalAllertService } from '../../service/contact-modal-allert.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  form:any=new FormGroup({
    first_name:new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z]{2,}$/), Validators.minLength(3)]),
    last_name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]{2,}$/),Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^\+381\d+$/),Validators.maxLength(15)]),
    message:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
  constructor(private contact_modal_service:ContactModalAllertService){}
  save():void{
    this.form.reset({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: ''
    });
    this.contact_modal_service.setDisabledState(false);

  }
  
}
