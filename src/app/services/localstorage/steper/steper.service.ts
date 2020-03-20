import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteperService {
  stepOneBtnIcoState: BehaviorSubject<any>;
  stepOneMilestoneLineState: BehaviorSubject<any>;
  stepOneMilestoneCircleState: BehaviorSubject<any>;
  stepTwoBtnState: BehaviorSubject<any>;
  stepTwoBtnIcoState: BehaviorSubject<any>;
  stepTwoMilestoneLineState: BehaviorSubject<any>;
  stepTwoMilestoneCircleState: BehaviorSubject<any>;
  stepThreeBtnState: BehaviorSubject<any>;
  stepThreeBtnIcoState: BehaviorSubject<any>;

  currentStepOneBtnIcoState: Observable<any>;
  currentStepOneMilestoneLineState: Observable<any>;
  currentStepOneMilestoneCircleState: Observable<any>;
  currentStepTwoBtnState: Observable<any>;
  currentStepTwoBtnIcoState: Observable<any>;
  currentStepTwoMilestoneLineState: Observable<any>;
  currentStepTwoMilestoneCircleState: Observable<any>;
  currentStepThreeBtnState: Observable<any>;
  currentStepThreeBtnIcoState: Observable<any>;
  constructor() { 
    this.initServiceVariables();
  }
  /* INITIALITATION METHOD ------------------------------------------------------------ */
  initServiceVariables() {
    this.stepOneBtnIcoState = new BehaviorSubject(localStorage.getItem('stepOneBtnIcoState'));
    this.stepOneMilestoneLineState = new BehaviorSubject(localStorage.getItem('stepOneMilestoneLineState'));
    this.stepOneMilestoneCircleState = new BehaviorSubject(localStorage.getItem('stepOneMilestoneCircleState'));
    this.stepTwoBtnState = new BehaviorSubject(localStorage.getItem('stepTwoBtnState'));
    this.stepTwoBtnIcoState = new BehaviorSubject(localStorage.getItem('stepTwoBtnIcoState'));
    this.stepTwoMilestoneLineState = new BehaviorSubject(localStorage.getItem('stepTwoMilestoneLineState'));
    this.stepTwoMilestoneCircleState = new BehaviorSubject(localStorage.getItem('stepTwoMilestoneCircleState'));
    this.stepThreeBtnState = new BehaviorSubject(localStorage.getItem('stepThreeBtnState'));
    this.stepThreeBtnIcoState = new BehaviorSubject(localStorage.getItem('stepThreeBtnIcoState'));

    this.currentStepOneBtnIcoState= this.stepOneBtnIcoState.asObservable();
    this.currentStepOneMilestoneLineState= this.stepOneMilestoneLineState.asObservable();
    this.currentStepOneMilestoneCircleState= this.stepOneMilestoneCircleState.asObservable();
    this.currentStepTwoBtnState= this.stepTwoBtnState.asObservable();
    this.currentStepTwoBtnIcoState= this.stepTwoBtnIcoState.asObservable();
    this.currentStepTwoMilestoneLineState= this.stepTwoMilestoneLineState.asObservable();
    this.currentStepTwoMilestoneCircleState= this.stepTwoMilestoneCircleState.asObservable();
    this.currentStepThreeBtnState= this.stepThreeBtnState.asObservable();
    this.currentStepThreeBtnIcoState= this.stepThreeBtnIcoState.asObservable();
  }
  /* CHANGE METHODS ------------------------------------------------------------ */
  changeStepOneBtnIcoState(data) {
    localStorage.setItem('stepOneBtnIcoState', data);
    this.stepOneBtnIcoState.next(data);
  }

  changeStepOneMilestoneLineState(data) {
    localStorage.setItem('stepOneMilestoneLineState', data);
    this.stepOneMilestoneLineState.next(data);
  }

  changeStepOneMilestoneCircleState(data) {
    localStorage.setItem('stepOneMilestoneCircleState', data);
    this.stepOneMilestoneCircleState.next(data);
  }

  changeStepTwoBtnState(data) {
    localStorage.setItem('stepTwoBtnState', data);
    this.stepTwoBtnState.next(data);
  }

  changeStepTwoBtnIcoState(data) {
    localStorage.setItem('stepTwoBtnIcoState', data);
    this.stepTwoBtnIcoState.next(data);
  }

  changeStepTwoMilestoneLineState(data) {
    localStorage.setItem('stepTwoMilestoneLineState', data);
    this.stepTwoMilestoneLineState.next(data);
  }

  changeStepTwoMilestoneCircleState(data) {
    localStorage.setItem('stepTwoMilestoneCircleState', data);
    this.stepTwoMilestoneCircleState.next(data);
  }

  changeStepThreeBtnState(data) {
    localStorage.setItem('stepThreeBtnState', data);
    this.stepThreeBtnState.next(data);
  }

  changeStepThreeBtnIcoState(data) {
    localStorage.setItem('stepThreeBtnIcoState', data);
    this.stepThreeBtnIcoState.next(data);
  }
}
