import { Component, OnInit } from '@angular/core';
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
  // Service variables
  step2DropzoneCurriculum: boolean;
  constructor(private storage: LocalstorageService, private files: FilesService) {
    storage.currentStep2DropzoneCurriculum.subscribe(res => this.step2DropzoneCurriculum = res);
  }

  ngOnInit() {

  }

  fileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  uploadFile() {
    this.files.uploadFile(this.selectedFile, 'curriculum.pdf').subscribe(res => {
      this.storage.changeStep2DropzoneCurriculum('Uploaded');
    }, (err) => {
      console.log(err)
    });
  }

  releasedFile(event){
    alert('File released');
    console.log(event.target.files[0]);
  }

}
