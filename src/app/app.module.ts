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

//Angular Modules
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
//Services
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { EventEmitterService } from './services/event-emitter.service';
import { LocalstorageService } from './services/localstorage.service';
//App Components
import { LoginComponent } from './components/subcomponents/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/subcomponents/navbar/navbar.component';
import { FooterComponent } from './components/subcomponents/footer/footer.component';
import { WelcomeComponent } from './components/subcomponents/welcome/welcome.component';
import { NotallowedComponent } from './components/notallowed/notallowed.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { RegisterComponent } from './components/register/register.component';

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
    RegisterComponent
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
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, SessionService, EventEmitterService, LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
