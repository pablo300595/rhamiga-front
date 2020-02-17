import { Component, OnInit, HostListener, Input } from '@angular/core';
import { LocalstorageService } from '../../../services/localstorage/localstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
@HostListener('window:resize', ['$event'])
export class NavbarComponent implements OnInit {
  isUserLoged: boolean;
  isResolutionDesktop = true;
  burgerClicked = false;
  constructor(private storage: LocalstorageService) {
    this.storage.currentIsUserLoged.subscribe(res => this.isUserLoged = res);
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    this.adjustDOMItems();
  }

  ngOnInit() {
  }

  onResize(event?) {
    this.adjustDOMItems();
  }

  adjustDOMItems() {
    if (window.innerWidth >= 0 && window.innerWidth <= 800) {
      this.isResolutionDesktop = false;
    } else {
      this.isResolutionDesktop = true;
    }
  }

  burgerMenuClicked() {
    this.burgerClicked = !this.burgerClicked;
  }

  signOut(){
    localStorage.removeItem('user');
    this.storage.changeIfUserIsLoged();
  }

}
