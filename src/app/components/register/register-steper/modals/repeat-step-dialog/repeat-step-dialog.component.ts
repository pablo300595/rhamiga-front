import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// Services
import { StepOneService } from './../../../../../services/localstorage/step-one/step-one.service';
import { StepTwoService } from './../../../../../services/localstorage/step-two/step-two.service';
import { LocalstorageService } from './../../../../../services/localstorage/localstorage.service';
import { SteperService } from './../../../../../services/localstorage/steper/steper.service';
import { NotificationService } from './../../../../../services/notifications/notification.service';


@Component({
  selector: 'app-repeat-step-dialog',
  templateUrl: './repeat-step-dialog.component.html',
  styleUrls: ['./repeat-step-dialog.component.sass']
})
export class RepeatStepDialogComponent {

  constructor(public dialogRef: MatDialogRef<RepeatStepDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private stepOneService: StepOneService,
    private stepTwoService: StepTwoService, private localstorage: LocalstorageService,
    private steper: SteperService, private notification: NotificationService) { }

  close() {
    this.dialogRef.close();
    return;
  }

  resetAll() {
    // data.step = 3 representa stepPhase Three
    this.notification.warn('Proceso reiniciado satisfactoriamente');
    this.steper.changeStepThreeBtnState('locked');
    
    if(this.data.step==3){
      this.localstorage.changeStepPhase('three');
      this.close();
      return;
    }
  
    this.stepTwoService.changeStep2FormEmail('');
    this.stepTwoService.changeStep2FormPhoneNumber('');
    this.stepTwoService.changeStep2FormCareer('');
    this.stepTwoService.changeStep2FormCareerLevel('Licenciatura');
    this.stepTwoService.changeStep2FormCategory('Tecnologías de la Información');
    this.stepTwoService.changeStep2FormExperience(0);
    this.stepTwoService.changeStep2FormLanguage('Inglés');
    this.stepTwoService.changeStep2FormLanguageLevel('A1');
    this.stepTwoService.changeStep2FormAllLanguages([]);
    this.stepTwoService.changeStep2DropzoneCurriculum(false);
    
    this.steper.changeStepThreeBtnIcoState('hide');
    this.steper.changeStepTwoBtnIcoState('hide');
    this.steper.changeStepTwoMilestoneLineState('locked');
    this.steper.changeStepTwoMilestoneCircleState('locked');

    if(this.data.step==2){
      this.localstorage.changeStepPhase('two');
      this.close();
      return;
    }
    
    this.stepOneService.changeStep1FormUsername('');
    this.stepOneService.changeStep1FormPassword('');
    this.stepOneService.changeStep1FormPasswordConfirm('');
    this.stepOneService.changeStep1FormFirstName('');
    this.stepOneService.changeStep1FormLastName('');
    this.stepOneService.changeStep1FormAge('');
    this.stepOneService.changeStep1FormSex('Masculino');
    this.stepOneService.changeStep1FormNationality('México');
    this.stepOneService.changeStep1FormState('Nayarit');
    this.stepOneService.changeStep1FormCity('');
    this.stepOneService.changeStep1IsValid('');

    this.steper.changeStepTwoBtnState('locked');
    this.steper.changeStepOneBtnIcoState('hide');
    this.steper.changeStepOneMilestoneLineState('locked');
    this.steper.changeStepOneMilestoneCircleState('locked');
   
    if(this.data.step==1 || this.data.step==0){
      this.localstorage.changeStepPhase('one');
      this.close();
      return;
    }
  }



}
