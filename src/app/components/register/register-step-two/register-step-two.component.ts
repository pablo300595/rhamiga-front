import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
// Services
import { LocalstorageService } from './../../../services/localstorage/localstorage.service';
import { FilesService } from './../../../services/http-request/files/files.service';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.sass']
})
export class RegisterStepTwoComponent implements OnInit {
  selectedFile: File = null;
  selectedFileName: string = '';
  selectedFileProgress: Number = 0;
  // Service variables
  step2DropzoneCurriculum: boolean;
  constructor(private storage: LocalstorageService, private files: FilesService) {
    this.storage.changeStep2DropzoneCurriculum(null);
    storage.currentStep2DropzoneCurriculum.subscribe(res => this.step2DropzoneCurriculum = res);
  }

  ngOnInit() {

  }

  fileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    this.uploadFile();
  }

  uploadFile() {
    this.storage.changeStep2DropzoneCurriculum('Uploaded');
    this.files.uploadFile(this.selectedFile, 'curriculum.pdf').subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        this.selectedFileProgress = Math.round(event.loaded / event.total * 100);
        console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type == HttpEventType.Response) {
        console.log(event);
      }
    });
  }

}
