import { Component } from '@angular/core';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { StepOneService } from './services/localstorage/step-one/step-one.service';
import { StepTwoService } from './services/localstorage/step-two/step-two.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'rhamiga-front';
  constructor(private storage: LocalstorageService, private stepOneService: StepOneService,
    private stepTwoService: StepTwoService) {
    this.initGlobalValuesIfNull();
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

  initGlobalValuesIfNull() {
    if (localStorage.getItem('stepPhase') == null) this.storage.changeStepPhase('one');
    if (localStorage.getItem('step1FormUsername') == null) this.stepOneService.changeStep1FormUsername('');
    if (localStorage.getItem('step1FormPassword') == null) this.stepOneService.changeStep1FormPassword('');
    if (localStorage.getItem('step1FormPasswordConfirm') == null) this.stepOneService.changeStep1FormPasswordConfirm('');
    if (localStorage.getItem('step1FormFirstName') == null) this.stepOneService.changeStep1FormFirstName('');
    if (localStorage.getItem('step1FormLastName') == null) this.stepOneService.changeStep1FormLastName('');
    if (localStorage.getItem('step1FormAge') == null) this.stepOneService.changeStep1FormAge('');
    if (localStorage.getItem('step1FormSex') == null) this.stepOneService.changeStep1FormSex('Masculino');
    if (localStorage.getItem('step1FormNationality') == null) this.stepOneService.changeStep1FormNationality('');
    if (localStorage.getItem('step1FormState') == null) this.stepOneService.changeStep1FormState('Nayarit');
    if (localStorage.getItem('step1FormCity') == null) this.stepOneService.changeStep1FormCity('');
    if (localStorage.getItem('step1FormUsername') == null) this.stepOneService.changeStep1FormUsername('');
    
    if (localStorage.getItem('step2FormEmail') == null) this.stepTwoService.changeStep2FormEmail('')
    if (localStorage.getItem('step2FormPhoneNumber') == null) this.stepTwoService.changeStep2FormPhoneNumber('')
    if (localStorage.getItem('step2FormCareer') == null) this.stepTwoService.changeStep2FormCareer('')
    if (localStorage.getItem('step2FormCareerLevel') == null) this.stepTwoService.changeStep2FormCareerLevel('Licenciatura')
    if (localStorage.getItem('step2FormCategory') == null) this.stepTwoService.changeStep2FormCategory('Tecnologías de la Información')
    if (localStorage.getItem('step2FormExperience') == null) this.stepTwoService.changeStep2FormExperience(0)
    if (localStorage.getItem('step2FormLanguage') == null) this.stepTwoService.changeStep2FormLanguage('Inglés')
    if (localStorage.getItem('step2FormLanguageLevel') == null) this.stepTwoService.changeStep2FormLanguageLevel('A1')
    if (localStorage.getItem('step2FormAllLanguages') == null) this.stepTwoService.changeStep2FormAllLanguages([])
    if (localStorage.getItem('step2DropzoneCurriculum') == null) this.stepTwoService.changeStep2DropzoneCurriculum(false)
  }
}
