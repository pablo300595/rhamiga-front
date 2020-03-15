import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { NgForm, FormControl } from '@angular/forms';
// Services
import { LocalstorageService } from './../../../services/localstorage/localstorage.service';
import { StepTwoService } from './../../../services/localstorage/step-two/step-two.service';
import { FilesService } from './../../../services/http-request/files/files.service';

interface List {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.sass']
})
export class RegisterStepTwoComponent implements OnInit {
  // Select Lists
  categoryList: List[] = [
    { value: 'Derecho', viewValue: 'Derecho' },
    { value: 'Ciencias de la Salud', viewValue: 'Ciencias de la Salud' },
    { value: 'Tecnologías de la Información', viewValue: 'Tecnologías de la Información' }
  ];
  languageList: List[];
  languageLevelList: List[] = [
    { value: 'A1', viewValue: 'A1' },
    { value: 'A2', viewValue: 'A2' },
    { value: 'B1', viewValue: 'B1' },
    { value: 'B2', viewValue: 'B2' },
    { value: 'C1', viewValue: 'C1' },
    { value: 'C2', viewValue: 'C2"' }
  ];
  studyLevelList: List[] = [
    { value: 'Licenciatura', viewValue: 'Licenciatura' },
    { value: 'Maestria', viewValue: 'Maestria' },
    { value: 'Doctorado', viewValue: 'Doctorado' },
    { value: 'Técnico', viewValue: 'Técnico' }
  ];
  // Service variables
  step2FormEmail: string;
  step2FormPhoneNumber: string;
  step2FormCareer: string;
  step2FormCareerLevel: string;
  step2FormCategory: string;
  step2FormExperience: Number;
  step2FormLanguage: string;
  step2FormLanguageLevel: string;
  step2FormAllLanguages: Array<any>;
  step2DropzoneCurriculum: boolean;
  // Temporal
  selectedFile: File = null;
  selectedFileName: string = '';
  selectedFileProgress: Number = 0;
  /* INIT MECHANISMS:---------------------------------------------------------------------
    Son las primeras funciones en ejecurse cuando se manda a llamar el componente
    register-steper.component.ts----------------------------------------------------------*/
  constructor(private storage: LocalstorageService, private stepTwoService: StepTwoService,
    private files: FilesService) {
    this.resetLanguageList();
    this.initServiceFormFields();
    this.stepTwoService.changeStep2DropzoneCurriculum(false);
  }

  ngOnInit() {

  }

  initServiceFormFields() {
    this.stepTwoService.currentStep2FormEmail.subscribe(res => this.step2FormEmail = res);
    this.stepTwoService.currentStep2FormPhoneNumber.subscribe(res => this.step2FormPhoneNumber = res);
    this.stepTwoService.currentStep2FormCareer.subscribe(res => this.step2FormCareer = res);
    this.stepTwoService.currentStep2FormCareerLevel.subscribe(res => this.step2FormCareerLevel = res);
    this.stepTwoService.currentStep2FormCategory.subscribe(res => this.step2FormCategory = res);
    this.stepTwoService.currentStep2FormExperience.subscribe(res => this.step2FormExperience = res);
    this.stepTwoService.currentStep2FormLanguage.subscribe(res => this.step2FormLanguage = res);
    this.stepTwoService.currentStep2FormLanguageLevel.subscribe(res => this.step2FormLanguageLevel = res);
    this.stepTwoService.currentStep2FormAllLanguages.subscribe(res => this.step2FormAllLanguages = res);
    this.stepTwoService.currentStep2DropzoneCurriculum.subscribe(res => this.step2DropzoneCurriculum = res);
  }
  /* USER INTERACTION TRIGGERING:------------------------------------------------------
      Los mecanismos siguientes se activan cuando el usuario actúa con algun componente*/
  fileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    this.uploadFile();
  }
  /* GENERAL SECTION:------------------------------------------------------
      Los mecanismos siguientes representan la funcionalidad principal del componente*/
  uploadFile() {
    this.stepTwoService.changeStep2DropzoneCurriculum(true);
    this.files.uploadFile(this.selectedFile, 'curriculum.pdf').subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        this.selectedFileProgress = Math.round(event.loaded / event.total * 100);
        console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type == HttpEventType.Response) {
        console.log(event);
      }
    });
  }

  updateFormFields(){
    this.stepTwoService.changeStep2FormEmail(this.step2FormEmail);
    this.stepTwoService.changeStep2FormPhoneNumber(this.step2FormPhoneNumber);
    this.stepTwoService.changeStep2FormCareer(this.step2FormCareer);
    this.stepTwoService.changeStep2FormCareerLevel(this.step2FormCareerLevel);
    this.stepTwoService.changeStep2FormCategory(this.step2FormCategory);
    this.stepTwoService.changeStep2FormExperience(this.step2FormExperience);
    this.stepTwoService.changeStep2FormLanguage(this.step2FormLanguage);
    this.stepTwoService.changeStep2FormLanguageLevel(this.step2FormLanguageLevel);
    this.stepTwoService.changeStep2FormAllLanguages(this.step2FormAllLanguages);
  }

  resetLanguageList() {
    this.languageList = [
      { value: 'Español', viewValue: 'Español' },
      { value: 'Inglés', viewValue: 'Inglés' },
      { value: 'Francés', viewValue: 'Francés' }
    ];
  }

  addItemToLanguageList() {
    // Se elimina un elemento que haya sido seleccionado
    for (let i = 0; i < this.languageList.length; i++) {
      if (this.languageList[i].value == this.step2FormLanguage) {
        // Se añade elemento eliminado a la lista de idiomas
        this.step2FormAllLanguages.push(this.languageList[i].value)
        this.languageList = (this.languageList.slice(0, i)).concat(this.languageList.slice(i + 1, this.languageList.length));
        //Posicionar a primer índice
        this.step2FormLanguage = this.languageList[0].value;
        return;
      }
    }
  }

}
