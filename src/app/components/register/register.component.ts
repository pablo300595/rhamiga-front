import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './../../services/localstorage/localstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  stepPhase: string;
  constructor(private storage: LocalstorageService) { 
    storage.currentStepPhase.subscribe(res => {
      this.stepPhase = res;
      if(res==null) this.storage.changeStepPhase(localStorage.getItem('stepPhase'));
    });
  }

  ngOnInit() {
  }

}
