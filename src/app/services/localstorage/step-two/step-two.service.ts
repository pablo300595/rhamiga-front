import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepTwoService {
  step2FormEmail: BehaviorSubject<any>;
  step2FormPhoneNumber: BehaviorSubject<any>;
  step2FormCareer: BehaviorSubject<any>;
  step2FormCareerLevel: BehaviorSubject<any>;
  step2FormCategory: BehaviorSubject<any>;
  step2FormExperience: BehaviorSubject<any>;
  step2FormLanguage: BehaviorSubject<any>;
  step2FormLanguageLevel: BehaviorSubject<any>;
  step2FormAllLanguages: BehaviorSubject<any>;
  step2DropzoneCurriculum: BehaviorSubject<any>;

  currentStep2FormEmail: Observable<any>;
  currentStep2FormPhoneNumber: Observable<any>;
  currentStep2FormCareer: Observable<any>;
  currentStep2FormCareerLevel: Observable<any>;
  currentStep2FormCategory: Observable<any>;
  currentStep2FormExperience: Observable<any>;
  currentStep2FormLanguage: Observable<any>;
  currentStep2FormLanguageLevel: Observable<any>;
  currentStep2FormAllLanguages: Observable<any>;
  currentStep2DropzoneCurriculum: Observable<any>;

  constructor() { 
    this.initServiceVariables();
  }
   /* INITIALITATION METHOD ------------------------------------------------------------ */
  initServiceVariables() {
    this.step2FormEmail = new BehaviorSubject(localStorage.getItem('step2FormEmail'));
    this.step2FormPhoneNumber = new BehaviorSubject(localStorage.getItem('step2FormPhoneNumber'));
    this.step2FormCareer = new BehaviorSubject(localStorage.getItem('step2FormCareer'));
    this.step2FormCareerLevel = new BehaviorSubject(localStorage.getItem('step2FormCareerLevel'));
    this.step2FormCategory = new BehaviorSubject(localStorage.getItem('step2FormCategory'));
    this.step2FormExperience = new BehaviorSubject(localStorage.getItem('step2FormExperience'));
    this.step2FormLanguage = new BehaviorSubject(localStorage.getItem('step2FormLanguage'));
    this.step2FormLanguageLevel = new BehaviorSubject(localStorage.getItem('step2FormLanguageLevel'));
    this.step2FormAllLanguages = new BehaviorSubject(localStorage.getItem('step2FormAllLanguages'));
    this.step2DropzoneCurriculum = new BehaviorSubject(localStorage.getItem('step2DropzoneCurriculum'));
    
    this.currentStep2FormEmail = this.step2FormEmail.asObservable();
    this.currentStep2FormPhoneNumber = this.step2FormPhoneNumber.asObservable();
    this.currentStep2FormCareer = this.step2FormCareer.asObservable();
    this.currentStep2FormCareerLevel = this.step2FormCareerLevel.asObservable();
    this.currentStep2FormCategory = this.step2FormCategory.asObservable();
    this.currentStep2FormExperience = this.step2FormExperience.asObservable();
    this.currentStep2FormLanguage = this.step2FormLanguage.asObservable();
    this.currentStep2FormLanguageLevel = this.step2FormLanguageLevel.asObservable();
    this.currentStep2FormAllLanguages = this.step2FormAllLanguages.asObservable();
    this.currentStep2DropzoneCurriculum = this.step2DropzoneCurriculum.asObservable();
  }
  /* CHANGE METHODS ------------------------------------------------------------ */
  changeStep2FormEmail(data){
    localStorage.setItem('step2FormEmail', data);
    this.step2FormEmail.next(data);
  }
  
  changeStep2FormPhoneNumber(data){
    localStorage.setItem('step2FormPhoneNumber', data);
    this.step2FormPhoneNumber.next(data);
  }

  changeStep2FormCareer(data){
    localStorage.setItem('step2FormCareer', data);
    this.step2FormCareer.next(data);
  }

  changeStep2FormCareerLevel(data){
    localStorage.setItem('step2FormCareerLevel', data);
    this.step2FormCareerLevel.next(data);
  }

  changeStep2FormCategory(data){
    localStorage.setItem('step2FormCategory', data);
    this.step2FormCategory.next(data);
  }

  changeStep2FormExperience(data){
    localStorage.setItem('step2FormExperience', data);
    this.step2FormExperience.next(data);
  }

  changeStep2FormLanguage(data){
    localStorage.setItem('step2FormLanguage', data);
    this.step2FormLanguage.next(data);
  }

  changeStep2FormLanguageLevel(data){
    localStorage.setItem('step2FormLanguageLevel', data);
    this.step2FormLanguageLevel.next(data);
  }

  changeStep2FormAllLanguages(data){
    localStorage.setItem('step2FormAllLanguages', data);
    this.step2FormAllLanguages.next(data);
  }

  changeStep2DropzoneCurriculum(data){
    localStorage.setItem('step2DropzoneCurriculum', data);
    this.step2DropzoneCurriculum.next(data);
  }
}
