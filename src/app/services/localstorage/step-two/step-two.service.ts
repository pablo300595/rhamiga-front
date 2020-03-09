import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepTwoService {
  step2FormEmail: BehaviorSubject<any>;
  step2DropzoneCurriculum: BehaviorSubject<any>;

  currentStep2FormEmail: Observable<any>;
  currentStep2DropzoneCurriculum: Observable<any>;

  constructor() { 
    this.initServiceVariables();
  }
   /* INITIALITATION METHOD ------------------------------------------------------------ */
  initServiceVariables() {
    this.step2FormEmail = new BehaviorSubject(localStorage.getItem('step2FormEmail'));
    this.step2DropzoneCurriculum = new BehaviorSubject(localStorage.getItem('step2DropzoneCurriculum')!=null);
    
    this.currentStep2FormEmail = this.step2FormEmail.asObservable();
    this.currentStep2DropzoneCurriculum = this.step2DropzoneCurriculum.asObservable();
  }
  /* CHANGE METHODS ------------------------------------------------------------ */
  changeStep2FormEmail(data){
    localStorage.setItem('step2FormEmail', data);
    this.step2FormEmail.next(data);
  }

  changeStep2DropzoneCurriculum(data){
    localStorage.setItem('step2DropzoneCurriculum', data);
    this.step2DropzoneCurriculum.next(data);
  }
}
