import { Component, Input, OnInit } from '@angular/core';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {


  nav: NavigatorService
  constructor(private navigator: NavigatorService) { 
    this.nav = navigator
  }

  ngOnInit(): void {
    console.log(this.nav.Items)
  }

  onLoad() {

  }

}
