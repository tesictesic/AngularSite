import { Component } from '@angular/core';
import { ContactModalAllertService } from '../../../contact/service/contact-modal-allert.service';

@Component({
  selector: 'app-modal-contact-form',
  templateUrl: './modal-contact-form.component.html',
  styleUrl: './modal-contact-form.component.css'
})
export class ModalContactFormComponent {
  constructor(private contact_modal_alert_service:ContactModalAllertService){}
    isDisabled:boolean=true;
    changeDisable():void{
      this.isDisabled=!this.isDisabled
    }
    ngOnInit() {
      this.contact_modal_alert_service.isDisabled$.subscribe(isDisabled => {
        this.isDisabled = isDisabled;
      });
    }
}
