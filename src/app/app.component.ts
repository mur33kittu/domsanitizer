import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private showHTML : string;
  constructor()
  {
    this.showHTML = "<h3>Hello There!!!</h3>"
  }
}
