import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  isUserLoged: BehaviorSubject<any>;
  stepPhase: BehaviorSubject<any>;

  currentIsUserLoged: Observable<any>;
  currentStepPhase: Observable<any>;

  constructor() {
    this.initServiceVariables();
  }
  /* INITIALITATION METHOD ------------------------------------------------------------ */
  initServiceVariables() {
    this.isUserLoged = new BehaviorSubject(localStorage.getItem('user') != null);
    this.stepPhase = new BehaviorSubject(localStorage.getItem('stepPhase'));

    this.currentIsUserLoged = this.isUserLoged.asObservable();
    this.currentStepPhase = this.stepPhase.asObservable();
  }
  /* CHANGE METHODS ------------------------------------------------------------ */
  changeIfUserIsLoged() {
    this.isUserLoged.next(localStorage.getItem('user') != null);
  }

  changeStepPhase(newPhase: string) {
    localStorage.setItem('stepPhase', newPhase)
    this.stepPhase.next(newPhase);
  }

}
