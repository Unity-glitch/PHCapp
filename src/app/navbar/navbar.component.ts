import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  linkMenu: boolean = false;
  constructor(private route: Router) {}

  ngOnInit(): void {}
  homePage() {
    this.route.navigate(['/']);
  }
  showMenu() {
    this.linkMenu = true;
  }
}
