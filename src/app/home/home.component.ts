import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

// image slider

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ImageSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  linkMenu: boolean = false;
  activeTab = 'mission';
  constructor(private route: Router) {}

  ngOnInit() {}

  homePage() {
    this.route.navigate(['/']);
  }
  showMenu() {
    this.linkMenu = true;
  }
}
