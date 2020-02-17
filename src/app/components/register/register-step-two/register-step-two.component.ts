import { Component, OnInit, ViewChild } from '@angular/core';
import { DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-register-step-two',
  templateUrl: './register-step-two.component.html',
  styleUrls: ['./register-step-two.component.sass']
})
export class RegisterStepTwoComponent implements OnInit {
  public type = 'component';
  public config: DropzoneConfigInterface;
  @ViewChild(DropzoneComponent, { static: true }) componentRef?: DropzoneComponent;
  constructor() {
    this.config = {
      clickable: true, maxFiles: 2,
      params: { 'usuario': 'this.userLoged', 'filename': 'CERTIFICADO.pdf', 'isImage': false },
      accept: (file, done) => {
        alert('archivo aceptado!');
        done();
      },
      autoReset: 1,
      errorReset: 1
    };
  }

  ngOnInit() {
  }
  /*  DROPZONE 1 METHODS  */
  public resetDropzoneUploads(): void {
    this.componentRef.directiveRef.reset();
  }

  public onUploadInit(args: any): void {

  }

  public onDragEnd(args: any): void {

  }

  public onUploadSuccess(args: any): void {
    alert('Archivo cargado');
  }

  onDrop(event: DragEvent) {
    this.resetDropzoneUploads();
  }

  onError(args: any) {
    alert('Error');
  }

  onErrorCommon(args: any) {
    this.resetDropzoneUploads();
  }

  dropzoneClicked() {
    this.resetDropzoneUploads();
  }


}
