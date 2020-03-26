//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//App Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Material Modules
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material';
//Services
import { UserService } from './services/http-request/user/user.service';
import { CandidateService } from './services/http-request/candidate/candidate.service';
import { SessionService } from './services/http-request/session/session.service';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { StepOneService } from './services/localstorage/step-one/step-one.service';
import { StepTwoService } from './services/localstorage/step-two/step-two.service';
import { StepThreeService } from './services/localstorage/step-three/step-three.service';
import { StepFourService } from './services/localstorage/step-four/step-four.service';
import { NotificationService } from './services/notifications/notification.service';
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
import { RegisterStepThreeComponent } from './components/register/register-step-three/register-step-three.component';
import { RegisterStepFourComponent } from './components/register/register-step-four/register-step-four.component';
import { RepeatStepDialogComponent } from './components/register/register-steper/modals/repeat-step-dialog/repeat-step-dialog.component';
import { ContractCardComponent } from './components/register/register-step-three/contract-card/contract-card.component';

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
    RegisterStepTwoComponent,
    RegisterStepThreeComponent,
    RegisterStepFourComponent,
    RepeatStepDialogComponent,
    ContractCardComponent
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
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, CandidateService, SessionService, LocalstorageService, StepOneService,
    StepTwoService, StepThreeService, StepFourService, NotificationService],
  bootstrap: [AppComponent],
  entryComponents: [RepeatStepDialogComponent]
})
export class AppModule { }
