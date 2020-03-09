import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepOneService {
  step1FormUsername: BehaviorSubject<any>;
  step1FormPassword: BehaviorSubject<any>;
  step1FormPasswordConfirm: BehaviorSubject<any>
  step1FormFirstName: BehaviorSubject<any>;
  step1FormLastName: BehaviorSubject<any>;
  step1FormAge: BehaviorSubject<any>;
  step1FormSex: BehaviorSubject<any>;
  step1FormNationality: BehaviorSubject<any>;
  step1FormState: BehaviorSubject<any>;
  step1FormCity: BehaviorSubject<any>;

  currentStep1FormUsername: Observable<any>;
  currentStep1FormPassword: Observable<any>;
  currentStep1FormPasswordConfirm: Observable<any>;
  currentStep1FormFirstName: Observable<any>;
  currentStep1FormLastName: Observable<any>;
  currentStep1FormAge: Observable<any>;
  currentStep1FormSex: Observable<any>;
  currentStep1FormNationality: Observable<any>;
  currentStep1FormState: Observable<any>;
  currentStep1FormCity: Observable<any>;

  constructor() {
    this.initServiceVariables();
  }

  /* INITIALITATION METHOD ------------------------------------------------------------ */
  initServiceVariables() {
    this.step1FormUsername = new BehaviorSubject(localStorage.getItem('step1FormUsername'));
    this.step1FormPassword = new BehaviorSubject(localStorage.getItem('step1FormPassword'));
    this.step1FormPasswordConfirm = new BehaviorSubject(localStorage.getItem('step1FormPasswordConfirm'));
    this.step1FormFirstName = new BehaviorSubject(localStorage.getItem('step1FormFirstName'));
    this.step1FormLastName = new BehaviorSubject(localStorage.getItem('step1FormLastName'));
    this.step1FormAge = new BehaviorSubject(localStorage.getItem('step1FormAge'));
    this.step1FormSex = new BehaviorSubject(localStorage.getItem('step1FormSex'));
    this.step1FormNationality = new BehaviorSubject(localStorage.getItem('step1FormNationality'));
    this.step1FormState = new BehaviorSubject(localStorage.getItem('step1FormState'));
    this.step1FormCity = new BehaviorSubject(localStorage.getItem('step1FormCity'));

    this.currentStep1FormUsername = this.step1FormUsername.asObservable();
    this.currentStep1FormPassword = this.step1FormPassword.asObservable();
    this.currentStep1FormPasswordConfirm = this.step1FormPasswordConfirm.asObservable();
    this.currentStep1FormFirstName = this.step1FormFirstName.asObservable();
    this.currentStep1FormLastName = this.step1FormLastName.asObservable();
    this.currentStep1FormAge = this.step1FormAge.asObservable();
    this.currentStep1FormSex = this.step1FormSex.asObservable();
    this.currentStep1FormNationality = this.step1FormNationality.asObservable();
    this.currentStep1FormState = this.step1FormState.asObservable();
    this.currentStep1FormCity = this.step1FormCity.asObservable();
  }
  /* CHANGE METHODS ------------------------------------------------------------ */
  changeStep1FormUsername(data) {
    localStorage.setItem('step1FormUsername', data);
    this.step1FormUsername.next(data);
  }

  changeStep1FormPassword(data) {
    localStorage.setItem('step1FormPassword', data);
    this.step1FormPassword.next(data);
  }

  changeStep1FormPasswordConfirm(data) {
    localStorage.setItem('step1FormPasswordConfirm', data);
    this.step1FormPasswordConfirm.next(data);
  }

  changeStep1FormFirstName(data) {
    localStorage.setItem('step1FormFirstName', data);
    this.step1FormFirstName.next(data);
  }

  changeStep1FormLastName(data) {
    localStorage.setItem('step1FormLastName', data);
    this.step1FormLastName.next(data);
  }

  changeStep1FormAge(data) {
    localStorage.setItem('step1FormAge', data);
    this.step1FormAge.next(data);
  }

  changeStep1FormSex(data) {
    localStorage.setItem('step1FormSex', data);
    this.step1FormSex.next(data);
  }

  changeStep1FormNationality(data) {
    localStorage.setItem('step1FormNationality', data);
    this.step1FormNationality.next(data);
  }

  changeStep1FormState(data) {
    localStorage.setItem('step1FormState', data);
    this.step1FormState.next(data);
  }

  changeStep1FormCity(data) {
    localStorage.setItem('step1FormCity', data);
    this.step1FormCity.next(data);
  }
}
