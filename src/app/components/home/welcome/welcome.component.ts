import { Component, OnInit } from '@angular/core';
import { UserService  } from './../../../services/http-request/user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  user: string;
  sex: string;
  firstName: string;
  lastName: string;
  status: string;
  age: number;
  state: string;
  city: string;
  nationality: string;
  constructor(private userService: UserService) { 
    this.userService.getUserByUsername(localStorage.getItem('user')).subscribe(res => {
      this.userService.getUserDataById(res[0]._id).subscribe(res => {
        this.sex = res[0].user_candidate[0].sex;
        this.firstName = res[0].user_candidate[0].firstName;
        this.lastName = res[0].user_candidate[0].lastName;
        this.status = res[0].user_candidate[0].status;
        this.age = res[0].user_candidate[0].age;
        this.state = res[0].user_candidate[0].state;
        this.city = res[0].user_candidate[0].city;
        this.nationality = res[0].user_candidate[0].nationality;
        this.user = res[0].username;
      });
    });
  }

  ngOnInit() {
  }

}
