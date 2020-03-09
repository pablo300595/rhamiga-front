import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
// Services
import { LocalstorageService } from '../../../services/localstorage/localstorage.service';
import { StepOneService } from '../../../services/localstorage/step-one/step-one.service';
import { UserService } from './../../../services/http-request/user/user.service';
import { NotificationService } from './../../../services/notifications/notification.service';
import { CandidateService } from './../../../services/http-request/candidate/candidate.service';

@Component({
  selector: 'app-register-steper',
  templateUrl: './register-steper.component.html',
  styleUrls: ['./register-steper.component.sass'],
  animations: [
    trigger('step-one-two-ico', [
      state('step-one',style({backgroundColor: 'none', borderRadius: '8px', color: '#ffffff'})),
      state('step-two',style({backgroundColor: '#1fec0cd3', borderRadius: '8px', color: '#ebe2e2b4'})),
      transition('step-one=>step-two',animate('1s ease-out')),
      transition('step-two=>step-one',animate('1s ease-out'))
    ]),
    trigger('step-one-two-circle', [
      state('step-one', style({width: '10px', height: '10px', border: '2px solid #706363', 
      backgroundColor: '#5c5a45', borderRadius: '6px'})),
      state('step-two', style({width: '10px', height: '10px', border: '2px solid #ffffff', 
      backgroundColor: '#ffffff', borderRadius: '6px'})),
      transition('step-one=>step-two', animate('1s ease-out')),
      transition('step-two=>step-one',animate('1s ease-out'))
    ]),
    trigger('step-one-two-line', [
      state('step-one', style({width: '50px', height: '4px',border: '2px solid #706363',
        backgroundColor: '#5c5a45'})),
      state('step-two', style({width: '50px', height: '4px',border: '2px solid #ffffff',
      backgroundColor: '#ffffff'})),
      transition('step-one=>step-two', animate('1s ease-out')),
      transition('step-two=>step-one',animate('1s ease-out'))
    ]),
    trigger('step-two-init',[
      state('step-two-locked', style({opacity: '0.4'})),
      state('step-two-unlocked', style({opacity: '1'})),
      transition('step-two-locked=>step-two-unlocked', animate('1s ease-out')),
      transition('step-two-unlocked=>step-two-locked', animate('1s ease-out'))
    ])
  ]
})
export class RegisterSteperComponent implements OnInit {
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
  //Validation Flags
  bothPasswordsAreEqual: boolean;
  //Animation Flags
  stepPhase: string;
  stepTwoButtonAnimation: string;
  constructor(private storage: LocalstorageService, private stepOneService: StepOneService, 
    private userService: UserService, private candidateService: CandidateService, 
    private notification: NotificationService) {
    this.initServiceFormFields();
    this.checkPosition();
  }

  ngOnInit() {}

  initServiceFormFields() {
    this.storage.currentStepPhase.subscribe(res => this.stepPhase = res);
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

  checkPosition(){
    switch(this.stepPhase){
      case 'two':
        this.changePosition('step-two');
        this.changeStep2Btn('step-two-unlocked');
        break;
    }
  }

  nextStep() {
    switch (this.stepPhase) {
      case 'one':
        this.validateStep1();
        break;
      case 'two':
        this.validateStep2();
      default:
        console.log('default');
        break;
    }
  }

  validateStep1() {
    let candidate = {
      "firstName": this.step1FormFirstName,
      "lastName": this.step1FormLastName,
      "status": "Pending",
      "age": this.step1FormAge,
      "state": this.step1FormState,
      "city": this.step1FormCity,
      "nationality": this.step1FormNationality,
      "sex": this.step1FormSex
    }

    if (this.step1FormUsername == '' || this.step1FormUsername == null ||
      this.step1FormPassword == '' || this.step1FormPassword == null ||
      this.step1FormPasswordConfirm == '' || this.step1FormPasswordConfirm == null ||
      this.step1FormFirstName == '' || this.step1FormFirstName == null ||
      this.step1FormLastName == '' || this.step1FormLastName == null ||
      this.step1FormAge == '' || this.step1FormAge == null ||
      this.step1FormSex == '' || this.step1FormSex == null ||
      this.step1FormNationality == '' || this.step1FormNationality == null ||
      this.step1FormState == '' || this.step1FormState == null ||
      this.step1FormCity == '' || this.step1FormCity == null
    ) {
      this.notification.warn('¡Error, hay campos obligatorios que no han sido llenados!');
      return;
    }
    // GetUserByUsername -----------------------------------------------------------------
    this.userService.getUserByUsername(this.step1FormUsername).subscribe(res => {
      if (res[0] != null) {
        this.notification.warn('¡Error, ese usuario ya se encuentra registrado!');
        return;
      }
      if (this.step1FormPassword != this.step1FormPasswordConfirm) {
        this.notification.warn('¡Error, las contraseñas no coinciden!');
        return;
      }
      // CreateCandidate -----------------------------------------------------------------
      this.candidateService.createCandidate(candidate).subscribe(res => {
        this.candidateService.findCandidateId(candidate).subscribe(res => {
          this.userService.createUser({
            "username": this.step1FormUsername,
            "password": this.step1FormPassword,
            "credential": "Candidate",
            "registrationDate": new Date(),
            "active": true,
            "candidate": res
          }).subscribe(res => {
            this.notification.warn('Paso 1 concluido exitosamente');
            this.storage.changeStepPhase('two');
            this.changePosition('step-two');
            this.changeStep2Btn('step-two-unlocked');
          });
        });
      });
      // CreateCandidate -----------------------------------------------------------------
    }); // GetUserByUsername -----------------------------------------------------------------
  }

  validateStep2(){
    alert('Paso 2 en proceso');
  }

  changePosition(newPosition: string){
    this.stepPhase = newPosition
  }

  changeStep2Btn(newPosition: string){
    this.stepTwoButtonAnimation = newPosition;
  }
}


