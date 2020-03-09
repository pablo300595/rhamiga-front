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
    this.storage.currentIsUserLoged.subscribe(res => this.isUserLoged = res);
  }

  ngOnInit() {
  }

}
