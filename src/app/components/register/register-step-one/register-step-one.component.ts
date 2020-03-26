import { Component, OnInit } from '@angular/core';
import { StepOneService } from './../../../services/localstorage/step-one/step-one.service';
import { FormControl, Validators } from '@angular/forms';

interface List {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.sass']
})
export class RegisterStepOneComponent implements OnInit {
  // Select Lists
  genderList: List[] = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Femenino', viewValue: 'Femenino' }
  ];

  countryList: List[] = [
    { value: 'México', viewValue: 'México' },
    { value: 'Estados Unidos', viewValue: 'Estados Unidos' }
  ];

  stateList: List[] = [
    { value: 'Guanajuato', viewValue: 'Guanajuato' },
    { value: 'Jalisto', viewValue: 'Jalisto' },
    { value: 'Nayarit', viewValue: 'Nayarit' }
  ];
  // Service Variables
  step1FormUsername: string;
  usernameFormControl = new FormControl('', [Validators.required, Validators.pattern(/^([a-z]|[A-Z]|[0-9])([0-9]|[A-Z]|[a-z]|-|.|_){9,19}$/)]);
  step1FormPassword: string;
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern(/^([0-9]|[A-Z]|[a-z]|-|.|_){10,20}$/)]);
  step1FormPasswordConfirm: string;
  passwordConfirmFormControl = new FormControl('', [Validators.required]);
  step1FormFirstName: string;
  firstNameFormControl = new FormControl('', [Validators.required]);
  step1FormLastName: string;
  lastNameFormControl = new FormControl('', [Validators.required]);
  step1FormAge: string;
  ageFormControl = new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]);
  step1FormSex: string;
  step1FormNationality: string;
  step1FormState: string;
  step1FormCity: string;
  cityFormControl = new FormControl('', [Validators.required]);
  // Validation Error Flag InitState

  // Controls
  hidePassword = true;
  hideConfirmPassword = true;
  /* INIT MECHANISMS:---------------------------------------------------------------------
    Son las primeras funciones en ejecurse cuando se manda a llamar el componente
    register-steper.component.ts----------------------------------------------------------*/
  constructor(private stepOneService: StepOneService) {
    this.initServiceFormFields();
  }

  ngOnInit() {
  }

  initServiceFormFields() {
    this.stepOneService.currentStep1FormUsername.subscribe(res => this.step1FormUsername = res);
    this.stepOneService.currentStep1FormPassword.subscribe(res => this.step1FormPassword = res);
    this.stepOneService.currentStep1FormPasswordConfirm.subscribe(res => this.step1FormPasswordConfirm = res);
    this.stepOneService.currentStep1FormFirstName.subscribe(res => this.step1FormFirstName = res);
    this.stepOneService.currentStep1FormLastName.subscribe(res => this.step1FormLastName = res);
    this.stepOneService.currentStep1FormAge.subscribe(res => this.step1FormAge = res);
    this.stepOneService.currentStep1FormSex.subscribe(res => this.step1FormSex = res);
    this.stepOneService.currentStep1FormNationality.subscribe(res => this.step1FormNationality = res);
    this.stepOneService.currentStep1FormState.subscribe(res => this.step1FormState = res);
    this.stepOneService.currentStep1FormCity.subscribe(res => this.step1FormCity = res);
  }
  /* USER INTERACTION TRIGGERING:------------------------------------------------------
      Los mecanismos siguientes se activan cuando el usuario actúa con algun componente*/
  updateFormFields() {
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
    this.verifyIfNoFormErrors();
  }
  /* ERROR HANDLING:------------------------------------------------------
      Los mecanismos siguientes se activan cuando el alguna validación se desencadena*/
  getErrorMessageUsername() {
    if(this.usernameFormControl.hasError('required')){
      this.stepOneService.changeStep1IsValid(false);
      return 'Campo requerido';
    } else if(this.usernameFormControl.hasError('pattern')) {
      this.stepOneService.changeStep1IsValid(false);
      return 'El usuario no cumple con el patrón de usuario: Inicia con letra y su longitúd es entre 12 y 20';
    } else return;
  }

  getErrorMessagePassword() {
    if(this.passwordFormControl.hasError('required')){
      this.stepOneService.changeStep1IsValid(false);
      return 'Campo requerido';
    } else if(this.passwordFormControl.hasError('pattern')) {
      this.stepOneService.changeStep1IsValid(false);
      return 'La contraseña debe tener un mínimo de 10 caracteres y un máximo de 20';
    } else return;
  }

  getErrorMessagePasswordConfirm(){
    if(this.passwordConfirmFormControl.hasError('required')){
      this.stepOneService.changeStep1IsValid(false);
      return 'Campo requerido';
    } else return;
  }

  getErrorMessageFirstName(){
    if(this.firstNameFormControl.hasError('required')){
      this.stepOneService.changeStep1IsValid(false);
      return 'Campo requerido';
    } else return;
  }

  getErrorMessageLastName(){
    if(this.lastNameFormControl.hasError('required')){
      this.stepOneService.changeStep1IsValid(false);
      return 'Campo requerido';
    } else return;
  }

  getErrorMessageAge(){
    if(this.ageFormControl.hasError('required')){
      this.stepOneService.changeStep1IsValid(false);
      return 'Campo requerido';
    } else if(this.ageFormControl.hasError('min')) {
      this.stepOneService.changeStep1IsValid(false);
      return 'El número mínimo es 18';
    } else if(this.ageFormControl.hasError('max')) {
      this.stepOneService.changeStep1IsValid(false);
      return 'El número máximo es 100';
    } else return;
  }

  getErrorMessageCity(){
    if(this.cityFormControl.hasError('required')){
      this.stepOneService.changeStep1IsValid(false);
      return 'Campo requerido';
    } else return;
  }

  verifyIfNoFormErrors(){
    if(this.usernameFormControl.invalid||this.passwordFormControl.invalid||this.passwordConfirmFormControl.invalid
      ||this.firstNameFormControl.invalid||this.lastNameFormControl.invalid||this.ageFormControl.invalid
      ||this.cityFormControl.invalid) this.stepOneService.changeStep1IsValid(false);
    else this.stepOneService.changeStep1IsValid(true);
  }
  
}
