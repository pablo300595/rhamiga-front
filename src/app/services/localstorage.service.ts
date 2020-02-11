import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  isUserLoged = new BehaviorSubject(localStorage.getItem('user')!=null);
  currentIsUserLoged = this.isUserLoged.asObservable();
  changeIfUserIsLoged(){
    this.isUserLoged.next(localStorage.getItem('user')!=null);
  }
}
