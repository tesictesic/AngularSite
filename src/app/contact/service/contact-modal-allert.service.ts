import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ContactModalAllertService {
  private isDisabledSubject = new BehaviorSubject<boolean>(true);
  isDisabled$ = this.isDisabledSubject.asObservable();

  setDisabledState(isDisabled: boolean) {
    this.isDisabledSubject.next(isDisabled);
  }

  constructor() { }
}
