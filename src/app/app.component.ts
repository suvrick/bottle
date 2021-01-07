import { Component, Input } from '@angular/core';
import { NavigatorService } from './services/navigator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kiss';

  nav: NavigatorService
  constructor(private navigator: NavigatorService) {
    this.nav = navigator    
  }
}
