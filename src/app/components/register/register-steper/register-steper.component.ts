import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';
// Components
import { RepeatStepDialogComponent } from './modals/repeat-step-dialog/repeat-step-dialog.component';
// Material
import { MatDialog } from '@angular/material';
// Services
import { LocalstorageService } from '../../../services/localstorage/localstorage.service';
import { StepOneService } from '../../../services/localstorage/step-one/step-one.service';
import { StepTwoService } from './../../../services/localstorage/step-two/step-two.service';
import { SteperService } from './../../../services/localstorage/steper/steper.service';
import { UserService } from './../../../services/http-request/user/user.service';
import { NotificationService } from './../../../services/notifications/notification.service';
import { CandidateService } from './../../../services/http-request/candidate/candidate.service';

@Component({
  selector: 'app-register-steper',
  templateUrl: './register-steper.component.html',
  styleUrls: ['./register-steper.component.sass'],
  animations: [
    trigger('stepOneBtnIco', [
      state('show', style({ opacity: '1', backgroundColor: 'green' })),
      state('hide', style({ opacity: '0.2', backgroundColor: 'red' })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ]),
    trigger('stepOneMilestoneLine', [
      state('locked', style({ border: '2px solid #706363', backgroundColor: '#5c5a45' })),
      state('unlocked', style({ border: '2px solid #ffffff', backgroundColor: '#ffffff' })),
      transition('locked => unlocked', animate('600ms ease-out')),
      transition('unlocked => locked', animate('600ms ease-in'))
    ]),
    trigger('stepOneMilestoneCircle', [
      state('locked', style({ border: '2px solid #706363', backgroundColor: '#5c5a45' })),
      state('unlocked', style({ border: '2px solid #ffffff', backgroundColor: '#ffffff' })),
      transition('locked => unlocked', animate('600ms ease-out')),
      transition('unlocked => locked', animate('600ms ease-in'))
    ]),
    trigger('stepTwoBtn', [
      state('locked', style({ opacity: 0.4 })),
      state('unlocked', style({ opacity: 1 })),
      transition('locked => unlocked', animate('600ms ease-out')),
      transition('unlocked => locked', animate('600ms ease-in'))
    ]),
    trigger('stepTwoBtnIco', [
      state('show', style({ opacity: '1', backgroundColor: 'green' })),
      state('hide', style({ opacity: '0.2', backgroundColor: 'red' })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ]),
    trigger('stepTwoMilestoneLine', [
      state('locked', style({ border: '2px solid #706363', backgroundColor: '#5c5a45' })),
      state('unlocked', style({ border: '2px solid #ffffff', backgroundColor: '#ffffff' })),
      transition('locked => unlocked', animate('600ms ease-out')),
      transition('unlocked => locked', animate('600ms ease-in'))
    ]),
    trigger('stepTwoMilestoneCircle', [
      state('locked', style({ border: '2px solid #706363', backgroundColor: '#5c5a45' })),
      state('unlocked', style({ border: '2px solid #ffffff', backgroundColor: '#ffffff' })),
      transition('locked => unlocked', animate('600ms ease-out')),
      transition('unlocked => locked', animate('600ms ease-in'))
    ]),
    trigger('stepThreeBtn', [
      state('locked', style({ opacity: 0.4 })),
      state('unlocked', style({ opacity: 1 })),
      transition('locked => unlocked', animate('600ms ease-out')),
      transition('unlocked => locked', animate('600ms ease-in'))
    ]),
    trigger('stepThreeBtnIco', [
      state('show', style({ opacity: '1', backgroundColor: 'green' })),
      state('hide', style({ opacity: '0.2', backgroundColor: 'red' })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ]),
  ]
})
export class RegisterSteperComponent implements OnInit {
  stepPhase: string;
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
  step1IsFormValid: boolean;

  step2FormEmail: string;
  step2FormPhoneNumber: string;
  step2FormCareer: string;
  step2FormCareerLevel: string;
  step2FormCategory: string;
  step2FormExperience: Number;
  step2FormLanguage: string;
  step2FormLanguageLevel: string;
  step2FormAllLanguages: Array<any>;
  step2IsFormValid: boolean;
  //Validation Flags
  bothPasswordsAreEqual: boolean;
  //Animation Flags
  stepOneBtnIcoState: string;
  stepOneMilestoneLineState: string;
  stepOneMilestoneCircleState: string;
  stepTwoBtnState: string;
  stepTwoBtnIcoState: string;
  stepTwoMilestoneLineState: string;
  stepTwoMilestoneCircleState: string;
  stepThreeBtnState: string;
  stepThreeBtnIcoState: string;
  //Reset Flag
  stepToReturn: String;
  /* INIT MECHANISMS:---------------------------------------------------------------------
    Son las primeras funciones en ejecurse cuando se manda a llamar el componente
    register-steper.component.ts----------------------------------------------------------*/
  constructor(private storage: LocalstorageService, private stepOneService: StepOneService,
    private stepTwoService: StepTwoService, private userService: UserService,
    private candidateService: CandidateService, public dialog: MatDialog,
    private notification: NotificationService, public steper: SteperService) {
    this.initServiceFormFields();
    //this.animateDefaultValues();
    this.animateSteperAccordingToCurrentPhase();
  }

  ngOnInit() { }

  initServiceFormFields() {
    this.storage.currentStepPhase.subscribe(res => this.stepPhase = res);
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
    this.stepOneService.currentIsFormValid.subscribe(res => this.step1IsFormValid = res);

    this.stepTwoService.currentStep2FormEmail.subscribe(res => this.step2FormEmail = res);
    this.stepTwoService.currentStep2FormPhoneNumber.subscribe(res => this.step2FormPhoneNumber = res);
    this.stepTwoService.currentStep2FormCareer.subscribe(res => this.step2FormCareer = res);
    this.stepTwoService.currentStep2FormCareerLevel.subscribe(res => this.step2FormCareerLevel = res);
    this.stepTwoService.currentStep2FormCategory.subscribe(res => this.step2FormCategory = res);
    this.stepTwoService.currentStep2FormExperience.subscribe(res => this.step2FormExperience = res);
    this.stepTwoService.currentStep2FormLanguage.subscribe(res => this.step2FormLanguage = res);
    this.stepTwoService.currentStep2FormLanguageLevel.subscribe(res => this.step2FormLanguageLevel = res);
    this.stepTwoService.currentStep2FormAllLanguages.subscribe(res => this.step2FormAllLanguages = res);
    this.stepTwoService.currentIsFormValid.subscribe(res => this.step2IsFormValid = res);

    this.steper.currentStepOneBtnIcoState.subscribe(res => this.stepOneBtnIcoState = res);
    this.steper.currentStepOneMilestoneLineState.subscribe(res => this.stepOneMilestoneLineState = res);
    this.steper.currentStepOneMilestoneCircleState.subscribe(res => this.stepOneMilestoneCircleState = res);
    this.steper.currentStepTwoBtnState.subscribe(res => this.stepTwoBtnState = res);
    this.steper.currentStepTwoBtnIcoState.subscribe(res => this.stepTwoBtnIcoState = res);
    this.steper.currentStepTwoMilestoneLineState.subscribe(res => this.stepTwoMilestoneLineState = res);
    this.steper.currentStepTwoMilestoneCircleState.subscribe(res => this.stepTwoMilestoneCircleState = res);
    this.steper.currentStepThreeBtnState.subscribe(res => this.stepThreeBtnState = res);
    this.steper.currentStepThreeBtnIcoState.subscribe(res => this.stepThreeBtnIcoState = res);


  }

  animateSteperAccordingToCurrentPhase() {
    switch (this.stepPhase) {
      /*case 'one':
        this.animatePhaseOneInitState();
        break;*/
      case 'two':
        this.animatePhaseTwoInitState();
        break;
      case 'three':
        this.animatePhaseThreeInitState();
        break;
    }
  }
  /* USER INTERACTION TRIGGERING:------------------------------------------------------
    Los mecanismos siguientes se activan cuando el usuario actúa con algun componente*/
  goToNextStep() {
    switch (this.stepPhase) {
      case 'one':
        this.validateStep1();
        break;
      case 'two':
        this.validateStep2();
        break;
      default:
        console.log('default');
        break;
    }
  }
  /* ANIMATION CHANGE STATES:------------------------------------------------------
    Los mecanismos siguientes permiten cambiar el estado de animación de cada componente*/

  animatePhaseTwoInitState() {
    this.steper.changeStepOneBtnIcoState('show');
    this.steper.changeStepOneMilestoneLineState('unlocked');
    this.steper.changeStepOneMilestoneCircleState('unlocked');
    this.steper.changeStepTwoBtnState('unlocked');
  }

  animatePhaseThreeInitState() {
    this.steper.changeStepOneBtnIcoState('show');
    this.steper.changeStepOneMilestoneLineState('unlocked');
    this.steper.changeStepOneMilestoneCircleState('unlocked');
    this.steper.changeStepTwoBtnState('unlocked');
    this.steper.changeStepTwoBtnIcoState('show');
    this.steper.changeStepTwoMilestoneLineState('unlocked');
    this.steper.changeStepTwoMilestoneCircleState('unlocked');
    this.steper.changeStepThreeBtnState('unlocked');
  }

  /* PHASE VALIDATION:------------------------------------------------------
    Mecanismos que evaluan si los valores de cada fase son correctos. Cuando la evaluación
    es positiva se realizan operaciones de escritura en el Back End, de lo contrario se 
    genera un error.*/
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

    if (!this.step1IsFormValid) {
      this.notification.warn('¡Error, hay campos obligatorios que no han sido llenados o no cumplen con las reglas !');
      return;
    }
    //Call-order-> 1)getUserByUsername,2)createCandidate,3)findCandidateId,4)createUser
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
        // FindCandidateId -----------------------------------------------------------------
        this.candidateService.findCandidateId(candidate).subscribe(res => {
          // CreateUser -----------------------------------------------------------------
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
            this.animateSteperAccordingToCurrentPhase();
            console.log();
          });
          // CreateUser -----------------------------------------------------------------
        });
        // FindCandidateId -----------------------------------------------------------------
      });
      // CreateCandidate -----------------------------------------------------------------
    }); // GetUserByUsername -----------------------------------------------------------------
  }

  validateStep2() {
    let candidate = {
      "firstName": this.step1FormFirstName,
      "lastName": this.step1FormLastName,
      "age": this.step1FormAge,
      "sex": this.step1FormSex,
      "nationality": this.step1FormNationality,
      "state": this.step1FormState,
      "city": this.step1FormCity,
      "email": this.step2FormEmail,
      "phoneNumber": this.step2FormPhoneNumber,
      "career": this.step2FormCareer,
      "careerLevel": this.step2FormCareerLevel,
      "category": this.step2FormCategory,
      "experience": this.step2FormExperience,
      "languages": this.step2FormAllLanguages,
      "resume": 'void',
      "status": "pending"
    }

    if (!this.step2IsFormValid) {
      this.notification.warn('¡Error, hay campos obligatorios que no han sido llenados o no cumplen con las reglas !');
      return;
    }
    
    // FindCandidateId -----------------------------------------------------------------
    this.candidateService.findCandidateId(candidate).subscribe(res => {
      // UpdateCandidate -----------------------------------------------------------------
      this.candidateService.updateCandidate(res, candidate).subscribe(res => {
        this.notification.warn('Paso 2 concluido exitosamente');
        this.storage.changeStepPhase('three');
        this.animateSteperAccordingToCurrentPhase();
      });
      // UpdateCandidate -----------------------------------------------------------------
    });
    // FindCandidateId -----------------------------------------------------------------
  }
  /* MODAL WINDOW METHODS
  Mecanismos que permiten la apertura de ventanas modales*/
  restartSteps() {
    let dialogRef = this.dialog.open(RepeatStepDialogComponent, {
      width: '300px',
      data: { step: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }

  restartToStep(step){
    let stepMap = new Map();
    stepMap.set('one', 1);
    stepMap.set('two', 2);
    stepMap.set('three', 3);
    stepMap.set('four', 4);
    if(stepMap.get(this.stepPhase)< step) {
      this.notification.warn('No es posible regresar a un paso posterior');
      return;
    }
    let dialogRef = this.dialog.open(RepeatStepDialogComponent, {
      width: '300px',
      data: { step: step }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('');
    });
  }

  /* GENERIC VALIDATION METHODS:-------------------------------------------------------------
    Son métodos genericos que realizan validaciones rapidas en otras functiones del código.*/

}


