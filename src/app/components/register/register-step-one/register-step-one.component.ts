import { Component, OnInit } from '@angular/core';
import { StepOneService } from './../../../services/localstorage/step-one/step-one.service';

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
  //FullForm
  step1FullForm: any;
  constructor(private stepOneService: StepOneService) {
    this.initServiceFormFields();
  }

  ngOnInit() {
  }

  initServiceFormFields() {
    this.stepOneService.currentStep1FormUsername.subscribe(res=> this.step1FormUsername = res);
    this.stepOneService.currentStep1FormPassword.subscribe(res=> this.step1FormPassword = res);
    this.stepOneService.currentStep1FormPasswordConfirm.subscribe(res => this.step1FormPasswordConfirm = res);
    this.stepOneService.currentStep1FormFirstName.subscribe(res => this.step1FormFirstName = res);
    this.stepOneService.currentStep1FormLastName.subscribe(res => this.step1FormLastName = res);
    this.stepOneService.currentStep1FormAge.subscribe(res => this.step1FormAge = res);
    this.stepOneService.currentStep1FormSex.subscribe(res => this.step1FormSex =res);
    this.stepOneService.currentStep1FormNationality.subscribe(res => this.step1FormNationality = res);
    this.stepOneService.currentStep1FormState.subscribe(res => this.step1FormState = res);
    this.stepOneService.currentStep1FormCity.subscribe(res => this.step1FormCity = res);
  }

  updateFormFields(){
    this.stepOneService.changeStep1FormUsername(this.step1FormUsername);
    this.stepOneService.changeStep1FormPassword(this.step1FormPassword);
    this.stepOneService.changeStep1FormPasswordConfirm(this.step1FormPasswordConfirm);
    this.stepOneService.changeStep1FormFirstName(this.step1FormFirstName);
    this.stepOneService.changeStep1FormLastName(this.step1FormLastName);
    this.stepOneService.changeStep1FormAge(this.step1FormAge);
    this.stepOneService.changeStep1FormSex(this.step1FormSex);
    this.stepOneService.changeStep1FormNationality(this.step1FormNationality);
    this.stepOneService.changeStep1FormState(this.step1FormState);
    this.stepOneService.changeStep1FormCity(this.step1FormCity);
  }

}
