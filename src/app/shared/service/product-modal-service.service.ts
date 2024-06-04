import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductModalServiceService {
  modalText$=new BehaviorSubject<string>("");
  isDisabledModal$=new BehaviorSubject<boolean>(true);
  constructor() { }

  changeTextToCart(text:string){
    this.modalText$.next(text);
  }
  changeModalStatus(value:boolean){
    this.isDisabledModal$.next(value);
  }
}
