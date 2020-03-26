//Angular
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';
import { NgForm } from '@angular/forms';
//Services
import { UserService } from './../../../services/http-request/user/user.service';
import { SessionService } from './../../../services/http-request/session/session.service';
import { LocalstorageService } from '../../../services/localstorage/localstorage.service';
import { NotificationService } from './../../../services/notifications/notification.service';
import { RegisterService } from '../../../services/localstorage/register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [
    trigger('loginCard', [
      state('init', style({ opacity: '0.2', transform:'translate(-650px)'})),
      state('end', style({ opacity: '1', transform:'translate(0px)'})),
      transition('init => end', animate('500ms ease-out')),
      transition('end => init', animate('500ms ease-out'))
    ])
  ]
})
export class LoginComponent implements OnInit {
  hideLoading: boolean;
  username: string;
  password: string;
  incorrectAuth: Boolean;
  //Animation
  loginCardState= 'init';
  constructor(private userService: UserService, private sessionService: SessionService,
    private storage: LocalstorageService, private notification: NotificationService,
    private register: RegisterService) {
    register.currentHideLoading.subscribe(res => this.hideLoading = res);
    setTimeout(()=>{this.loginCardState='end';},100);
  }

  ngOnInit() {
    this.incorrectAuth = false;
  }
  /* Activated when user clicks the form auth button*/
  authUser() {
    this.register.changeHideLoading(false);
    let userdata = { username: this.username, password: this.password };
    this.userService.authUser(userdata).subscribe((res) => {
      console.log(res);
      this.incorrectAuth = res[0] == undefined;

      if (!this.incorrectAuth) {
        let newSession = {
          user: res[0]._id,
          sessionStart: new Date(),
          active: true
        }
        this.sessionService.insertSession(newSession).subscribe((res) => {
          localStorage.setItem('user', this.username);
          this.storage.changeIfUserIsLoged();
          console.log('Session Started!');
          this.register.changeHideLoading(true);
        });
      } else {
        this.register.changeHideLoading(true);
        this.notification.warn('¡Error, usuario o contraseña erróneos!');
      }
    });
    console.log('Processing...');
  }

}
