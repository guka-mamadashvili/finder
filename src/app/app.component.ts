import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topPicks = ["../assets/cafe.svg", "../assets/restaurant.svg", "../assets/shopping.svg"]
}
