import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  linkMenu: boolean = false;
  text: string[] = [
    'Reaching the unreached at all cost and reawakening the church to he responsibilities',
    'You can go, pray and give',
  ];

  // currentText = this.text[0];
  // index = 0;
  constructor(private route: Router) {}

  ngOnInit() {
    // this.animatedtext();
  }

  homePage() {
    this.route.navigate(['/']);
  }
  showMenu() {
    this.linkMenu = true;
  }
  // animatedtext() {
  //   setInterval(() => {
  //     this.index = (this.index + 1) % this.text.length;
  //     this.currentText = this.text[this.index];
  //   }, 3000);
  // }
}
