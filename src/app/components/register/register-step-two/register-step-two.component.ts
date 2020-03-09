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
    {value: 'Derecho', viewValue: 'Derecho'},
    {value: 'Ciencias de la Salud', viewValue: 'Ciencias de la Salud'},
    {value: 'Tecnologías de la Información', viewValue: 'Tecnologías de la Información'}
  ];
  languageList: List[];
  languageLevelList: List[] = [
    {value: 'A1', viewValue: 'A1'},
    {value: 'A2', viewValue: 'A2'},
    {value: 'B1', viewValue: 'B1'},
    {value: 'B2', viewValue: 'B2'},
    {value: 'C1', viewValue: 'C1'},
    {value: 'C2', viewValue: 'C2"'}
  ];
  studyLevelList: List[] = [
    {value: 'Licenciatura', viewValue: 'Licenciatura'},
    {value: 'Maestria', viewValue: 'Maestria'},
    {value: 'Doctorado', viewValue: 'Doctorado'},
    {value: 'Técnico', viewValue: 'Técnico'}
  ];
  // Service variables
  step2FormEmail: string;
  step2FormPhoneNumber: string;
  step2FormCareer: string;
  step2FormStudyLevel: string;
  step2FormCategory: string;
  step2FormExperience: Number;
  step2DropzoneCurriculum: boolean;
  // Temporal
  selectedLanguage: string;

  selectedFile: File = null;
  selectedFileName: string = '';
  selectedFileProgress: Number = 0;
  constructor(private storage: LocalstorageService, private stepTwoService: StepTwoService, 
    private files: FilesService) {
    this.resetLanguageList();
    this.stepTwoService.changeStep2DropzoneCurriculum(null);
    
  }

  ngOnInit() {

  }

  initServiceFormFields() {
    this.stepTwoService.currentStep2FormEmail.subscribe(res => this.step2FormEmail = res);
    this.stepTwoService.currentStep2DropzoneCurriculum.subscribe(res => this.step2DropzoneCurriculum = res);
  }

  fileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    this.uploadFile();
  }

  uploadFile() {
    this.stepTwoService.changeStep2DropzoneCurriculum('Uploaded');
    this.files.uploadFile(this.selectedFile, 'curriculum.pdf').subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        this.selectedFileProgress = Math.round(event.loaded / event.total * 100);
        console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type == HttpEventType.Response) {
        console.log(event);
      }
    });
  }

  resetLanguageList() {
    this.languageList = [
      {value: 'Español', viewValue: 'Español'},
      {value: 'Inglés', viewValue: 'Inglés'},
      {value: 'Francés', viewValue: 'Francés'}
    ];
  }

  deleteLanguageListItem(){
    for(let i = 0; i<this.languageList.length; i++){
      if(this.languageList[i].value== this.selectedLanguage){
        this.languageList = (this.languageList.slice(0,i)).concat(this.languageList.slice(i+1,this.languageList.length));
        return;
      }
    }
  }

}
