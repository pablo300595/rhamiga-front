import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  hideLoading: BehaviorSubject<any>;

  currentHideLoading: Observable<any>;
  constructor() {
    this.initServiceVariables();
  }

  /* INITIALITATION METHOD ------------------------------------------------------------ */
  initServiceVariables() {
    this.hideLoading = new BehaviorSubject(true);

    this.currentHideLoading = this.hideLoading.asObservable();
  }
  /* CHANGE METHODS ------------------------------------------------------------ */
  changeHideLoading(data) {
    this.hideLoading.next(data);
  }
}
