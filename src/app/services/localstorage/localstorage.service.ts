import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  /*Check Login data*/
  isUserLoged = new BehaviorSubject(localStorage.getItem('user')!=null);
  currentIsUserLoged = this.isUserLoged.asObservable();
  
  changeIfUserIsLoged(){
    this.isUserLoged.next(localStorage.getItem('user')!=null);
  }
  /*FORM Step 1 data*/
  stepPhase = new BehaviorSubject(localStorage.getItem('stepPhase'));
  currentStepPhase = this.stepPhase.asObservable();
  changeStepPhase(newPhase: string){
    localStorage.setItem('stepPhase',newPhase)
    this.stepPhase.next(newPhase);
  }

  step1Form = {
    step1FormUsername: null,
    step1FormPassword: null,
    step1FormPasswordConfirm: null,
    step1FormFirstName: null,
    step1FormLastName: null,
    step1FormAge: null,
    step1FormSex: null,
    step1FormNationality: null,
    step1FormState: null,
    step1FormCity: null
  }
  

  step1FormUsername = new BehaviorSubject(localStorage.getItem('step1FormUsername'));
  currentStep1FormUsername = this.step1FormUsername.asObservable();
  changeStep1FormUsername(data){
    localStorage.setItem('step1FormUsername', data);
    this.step1FormUsername.next(data);
  }

  step1FormPassword = new BehaviorSubject(localStorage.getItem('step1FormPassword'));
  currentStep1FormPassword = this.step1FormPassword.asObservable();
  changeStep1FormPassword(data){
    localStorage.setItem('step1FormPassword', data);
    this.step1FormPassword.next(data);
  }

  step1FormPasswordConfirm = new BehaviorSubject(localStorage.getItem('step1FormPasswordConfirm'));
  currentStep1FormPasswordConfirm = this.step1FormPasswordConfirm.asObservable();
  changeStep1FormPasswordConfirm(data){
    localStorage.setItem('step1FormPasswordConfirm', data);
    this.step1FormPasswordConfirm.next(data);
  }

  step1FormFirstName = new BehaviorSubject(localStorage.getItem('step1FormFirstName'));
  currentStep1FormFirstName = this.step1FormFirstName.asObservable();
  changeStep1FormFirstName(data){
    localStorage.setItem('step1FormFirstName', data);
    this.step1FormFirstName.next(data);
  }

  step1FormLastName = new BehaviorSubject(localStorage.getItem('step1FormLastName'));
  currentStep1FormLastName = this.step1FormLastName.asObservable();
  changeStep1FormLastName(data){
    localStorage.setItem('step1FormLastName', data);
    this.step1FormLastName.next(data);
  }

  step1FormAge = new BehaviorSubject(localStorage.getItem('step1FormAge'));
  currentStep1FormAge = this.step1FormAge.asObservable();
  changeStep1FormAge(data){
    localStorage.setItem('step1FormAge', data);
    this.step1FormAge.next(data);
  }

  step1FormSex = new BehaviorSubject(localStorage.getItem('step1FormSex'));
  currentStep1FormSex = this.step1FormSex.asObservable();
  changeStep1FormSex(data){
    localStorage.setItem('step1FormSex', data);
    this.step1FormSex.next(data);
  }

  step1FormNationality = new BehaviorSubject(localStorage.getItem('step1FormNationality'));
  currentStep1FormNationality = this.step1FormNationality.asObservable();
  changeStep1FormNationality(data){
    localStorage.setItem('step1FormNationality', data);
    this.step1FormNationality.next(data);
  }

  step1FormState = new BehaviorSubject(localStorage.getItem('step1FormState'));
  currentStep1FormState = this.step1FormState.asObservable();
  changeStep1FormState(data){
    localStorage.setItem('step1FormState', data);
    this.step1FormState.next(data);
  }

  step1FormCity = new BehaviorSubject(localStorage.getItem('step1FormCity'));
  currentStep1FormCity = this.step1FormCity.asObservable();
  changeStep1FormCity(data){
    localStorage.setItem('step1FormCity', data);
    this.step1FormCity.next(data);
  }

  /*FORM Step 2 data*/
  step2DropzoneCurriculum = new BehaviorSubject(localStorage.getItem('step2DropzoneCurriculum')!=null);
  currentStep2DropzoneCurriculum = this.step2DropzoneCurriculum.asObservable();
  changeStep2DropzoneCurriculum(data){
    localStorage.setItem('step2DropzoneCurriculum', data);
    this.step2DropzoneCurriculum.next(data);
  }
}
