import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-step-one',
  templateUrl: './register-step-one.component.html',
  styleUrls: ['./register-step-one.component.sass']
})
export class RegisterStepOneComponent implements OnInit {
  username: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

}