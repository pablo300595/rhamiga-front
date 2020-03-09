import { Component } from '@angular/core';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { StepOneService } from './services/localstorage/step-one/step-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'rhamiga-front';
  constructor(private storage: LocalstorageService, private stepOneService: StepOneService) {
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
  }
}
