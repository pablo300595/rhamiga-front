import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Material Modules
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//Angular Modules
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
//Services
import { UserService } from './services/http-request/user/user.service';
import { SessionService } from './services/http-request/session/session.service';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { NotificationService } from './services/notifications/notification.service';
//DropZone
import { DropzoneConfigInterface, DROPZONE_CONFIG, DropzoneModule } from 'ngx-dropzone-wrapper';
//App Components
import { LoginComponent } from './components/home/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/subcomponents/navbar/navbar.component';
import { FooterComponent } from './components/subcomponents/footer/footer.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { NotallowedComponent } from './components/notallowed/notallowed.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSteperComponent } from './components/register/register-steper/register-steper.component';
import { RegisterStepOneComponent } from './components/register/register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './components/register/register-step-two/register-step-two.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   url: 'https://app-apipruebas.herokuapp.com/upload',
   maxFilesize: 3,
   acceptedFiles: '.pdf',
   createImageThumbnails: true,
   maxThumbnailFilesize: 10,
   thumbnailWidth: 800,
   thumbnailHeight: 800,
   dictDefaultMessage: 'Arrastre los archivos o de click para su carga',
   clickable: true
 };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    NotallowedComponent,
    CandidateComponent,
    RegisterComponent,
    RegisterSteperComponent,
    RegisterStepOneComponent,
    RegisterStepTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    DropzoneModule
  ],
  providers: [UserService, SessionService, LocalstorageService,
    NotificationService, { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG}],
  bootstrap: [AppComponent]
})
export class AppModule { }
