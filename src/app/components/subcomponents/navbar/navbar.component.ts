import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
@HostListener('window:resize', ['$event'])
export class NavbarComponent implements OnInit {
  isResolutionDesktop = true;
  burgerClicked = false;
  constructor() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
  }

  ngOnInit() {
  }

  onResize(event?) {
    if (window.innerWidth >= 0 && window.innerWidth <= 800) {
      this.isResolutionDesktop = false;
    } else {
      this.isResolutionDesktop = true;
    }
  }

  burgerMenuClicked() {
    this.burgerClicked = !this.burgerClicked;
  }

}
