import { Component } from '@angular/core';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { StepOneService } from './services/localstorage/step-one/step-one.service';
import { StepTwoService } from './services/localstorage/step-two/step-two.service';
import { SteperService } from './services/localstorage/steper/steper.service';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('introCard', [
      state('init', style({ opacity: '1', zIndex: '120'})),
      state('end', style({ opacity: '0', zIndex: '-5'})),
      transition('init => end', animate('600ms ease-out')),
      transition('end => init', animate('600ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'Mirval Services';
  introCardState: string;

  constructor(private storage: LocalstorageService, private stepOneService: StepOneService,
    private stepTwoService: StepTwoService, private steper: SteperService) {
    this.initGlobalValuesIfNull();
    this.introCardState='init';
    setTimeout(()=>{this.introCardState='end'},4000);
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

  initGlobalValuesIfNull() {
    // Step One Services
    if (localStorage.getItem('stepPhase') == null) this.storage.changeStepPhase('one');
    if (localStorage.getItem('step1FormUsername') == null) this.stepOneService.changeStep1FormUsername('');
    if (localStorage.getItem('step1FormPassword') == null) this.stepOneService.changeStep1FormPassword('');
    if (localStorage.getItem('step1FormPasswordConfirm') == null) this.stepOneService.changeStep1FormPasswordConfirm('');
    if (localStorage.getItem('step1FormFirstName') == null) this.stepOneService.changeStep1FormFirstName('');
    if (localStorage.getItem('step1FormLastName') == null) this.stepOneService.changeStep1FormLastName('');
    if (localStorage.getItem('step1FormAge') == null) this.stepOneService.changeStep1FormAge('');
    if (localStorage.getItem('step1FormSex') == null) this.stepOneService.changeStep1FormSex('Masculino');
    if (localStorage.getItem('step1FormNationality') == null) this.stepOneService.changeStep1FormNationality('México');
    if (localStorage.getItem('step1FormState') == null) this.stepOneService.changeStep1FormState('Nayarit');
    if (localStorage.getItem('step1FormCity') == null) this.stepOneService.changeStep1FormCity('');
    if (localStorage.getItem('step1FormUsername') == null) this.stepOneService.changeStep1FormUsername('');
    // Step Two Services
    if (localStorage.getItem('step2FormEmail') == null) this.stepTwoService.changeStep2FormEmail('')
    if (localStorage.getItem('step2FormPhoneNumber') == null) this.stepTwoService.changeStep2FormPhoneNumber('')
    if (localStorage.getItem('step2FormCareer') == null) this.stepTwoService.changeStep2FormCareer('')
    if (localStorage.getItem('step2FormCareerLevel') == null) this.stepTwoService.changeStep2FormCareerLevel('Licenciatura')
    if (localStorage.getItem('step2FormCategory') == null) this.stepTwoService.changeStep2FormCategory('Tecnologías de la Información')
    if (localStorage.getItem('step2FormExperience') == null) this.stepTwoService.changeStep2FormExperience('')
    if (localStorage.getItem('step2FormLanguage') == null) this.stepTwoService.changeStep2FormLanguage('Inglés')
    if (localStorage.getItem('step2FormLanguageLevel') == null) this.stepTwoService.changeStep2FormLanguageLevel('A1')
    if (localStorage.getItem('step2FormAllLanguages') == null) this.stepTwoService.changeStep2FormAllLanguages([])
    if (localStorage.getItem('step2DropzoneCurriculum') == null) this.stepTwoService.changeStep2DropzoneCurriculum(false)
    // Steper Services
    if (localStorage.getItem('stepOneBtnIcoState') == null) this.steper.changeStepOneBtnIcoState('hide');
    if (localStorage.getItem('stepOneMilestoneLineState') == null) this.steper.changeStepOneMilestoneLineState('locked');
    if (localStorage.getItem('stepOneMilestoneCircleState') == null) this.steper.changeStepOneMilestoneCircleState('locked');
    if (localStorage.getItem('stepTwoBtnState') == null) this.steper.changeStepTwoBtnState('locked');
    if (localStorage.getItem('stepTwoBtnIcoState') == null) this.steper.changeStepTwoBtnIcoState('hide');
    if (localStorage.getItem('stepTwoMilestoneLineState') == null) this.steper.changeStepTwoMilestoneLineState('locked');
    if (localStorage.getItem('stepTwoMilestoneCircleState') == null) this.steper.changeStepTwoMilestoneCircleState('locked');
    if (localStorage.getItem('stepThreeBtnState') == null) this.steper.changeStepThreeBtnState('locked');
    if (localStorage.getItem('stepThreeBtnIcoState') == null) this.steper.changeStepThreeBtnIcoState('hide');
    
  }
}
