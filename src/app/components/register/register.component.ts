import { Component, OnInit } from '@angular/core';
// Services
import { RegisterService } from '../../services/localstorage/register/register.service';
import { LocalstorageService } from './../../services/localstorage/localstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  hideLoading: boolean;
  stepPhase: string;
  constructor(private register: RegisterService, private storage: LocalstorageService) { 
    register.currentHideLoading.subscribe(res => this.hideLoading = res);
    storage.currentStepPhase.subscribe(res => this.stepPhase = res);
  }

  ngOnInit() {
  }

}
