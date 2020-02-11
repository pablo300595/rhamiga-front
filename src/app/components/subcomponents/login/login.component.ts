import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { SessionService } from './../../../services/session.service';
import { LocalstorageService } from './../../../services/localstorage.service';
import { EventEmitterService } from './../../../services/event-emitter.service';
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
    private storage: LocalstorageService) {
      
  }
  
  ngOnInit() {
    this.incorrectAuth = false;
  }

  authUser() {
    let userdata = { username: this.username, password: this.password };
    this.userService.authUser(userdata).subscribe((res) => {
      console.log(res);
      this.incorrectAuth = res[0] == undefined;
      let newSession = {
        user: res[0]._id,
        sessionStart: new Date(),
        active: true
      }
      if (!this.incorrectAuth) {
        this.sessionService.insertSession(newSession).subscribe((res) => {
          localStorage.setItem('user', this.username);
          this.storage.changeIfUserIsLoged();
          console.log('Session Started!');
        });
      }
    });
    console.log('Processing...');
  }

}
