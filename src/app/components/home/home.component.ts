import { Component, OnInit, Inject, Injectable, Input, Output } from '@angular/core';
import { LocalstorageService } from "../../services/localstorage/localstorage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})


export class HomeComponent implements OnInit {
  isUserLoged: boolean;
  constructor(private storage: LocalstorageService) {
    this.storage.currentIsUserLoged.subscribe(res => {
      this.isUserLoged = res;
      if(localStorage.getItem('stepPhase')==null) this.initStepOneFormData();
    });
  }

  ngOnInit() {
  }

  initStepOneFormData() {
    localStorage.setItem('stepPhase','one');
    localStorage.setItem('step1FormUsername','');
    localStorage.setItem('step1FormPassword','');
    localStorage.setItem('step1FormPasswordConfirm','');
    localStorage.setItem('step1FormFirstName','');
    localStorage.setItem('step1FormLastName','');
    localStorage.setItem('step1FormAge','');
    localStorage.setItem('step1FormSex','Masculino');
    localStorage.setItem('step1FormNationality','');
    localStorage.setItem('step1FormState','Nayarit');
    localStorage.setItem('step1FormCity','');
  }

}
