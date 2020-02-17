import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from './../../../services/localstorage/localstorage.service';

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.sass']
})
export class RegisterStepOneComponent implements OnInit {
  step1FormUsername: string;
  step1FormPassword: string;
  step1FormPasswordConfirm: string;
  step1FormFirstName: string;
  step1FormLastName: string;
  step1FormAge: string;
  step1FormSex: string;
  step1FormNationality: string;
  step1FormState: string;
  step1FormCity: string;
  constructor(private storage: LocalstorageService) {
    storage.currentStep1FormUsername.subscribe(res => this.step1FormUsername = res);
    storage.currentStep1FormPassword.subscribe(res => this.step1FormPassword = res);
    storage.currentStep1FormPasswordConfirm.subscribe(res => this.step1FormPasswordConfirm = res);
    storage.currentStep1FormFirstName.subscribe(res => this.step1FormFirstName = res);
    storage.currentStep1FormLastName.subscribe(res => this.step1FormLastName = res);
    storage.currentStep1FormAge.subscribe(res => this.step1FormAge = res);
    storage.currentStep1FormSex.subscribe(res => this.step1FormSex = res);
    storage.currentStep1FormNationality.subscribe(res => this.step1FormNationality = res);
    storage.currentStep1FormState.subscribe(res => this.step1FormState = res);
    storage.currentStep1FormCity.subscribe(res => this.step1FormCity = res);
  }

  ngOnInit() {
  }

  updateFormFields(){
    if(this.step1FormUsername!=null)this.storage.changeStep1FormUsername(this.step1FormUsername);
    if(this.step1FormPassword!=null)this.storage.changeStep1FormPassword(this.step1FormPassword);
    if(this.step1FormPasswordConfirm!=null)this.storage.changeStep1FormPasswordConfirm(this.step1FormPasswordConfirm);
    if(this.step1FormFirstName!=null)this.storage.changeStep1FormFirstName(this.step1FormFirstName);
    if(this.step1FormLastName!=null)this.storage.changeStep1FormLastName(this.step1FormLastName);
    if(this.step1FormAge!=null)this.storage.changeStep1FormAge(this.step1FormAge);
    if(this.step1FormSex!=null)this.storage.changeStep1FormSex(this.step1FormSex);
    if(this.step1FormNationality!=null)this.storage.changeStep1FormNationality(this.step1FormNationality);
    if(this.step1FormState!=null)this.storage.changeStep1FormState(this.step1FormState);
    if(this.step1FormCity!=null)this.storage.changeStep1FormCity(this.step1FormCity);
  }


}
