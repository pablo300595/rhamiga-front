import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from './../../../services/http-request/user/user.service';
import { SessionService } from './../../../services/http-request/session/session.service';
import { LocalstorageService } from '../../../services/localstorage/localstorage.service';
import { NotificationService } from './../../../services/notifications/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  incorrectAuth: Boolean;
  constructor(private userService: UserService, private sessionService: SessionService,
    private storage: LocalstorageService, private notification: NotificationService) {
      
  }
  
  ngOnInit() {
    this.incorrectAuth = false;
  }
  /* Activated when user clicks the form auth button*/
  authUser() {
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
        });
      } else {
        this.notification.warn('¡Error, usuario o contraseña erróneos!');
      }
    });
    console.log('Processing...');
  }

}
