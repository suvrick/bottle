import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotsService } from 'src/app/services/bots.service';

@Component({
  selector: 'app-addbot',
  templateUrl: './addbot.component.html',
  styleUrls: ['./addbot.component.scss']
})
export class AddbotComponent implements OnInit {

  Url: string

  constructor(readonly router: Router, readonly botService: BotsService) { }

  ngOnInit(): void {
  }

  onAdd() {
    
    if(!this.Url) {
      return
    }

    this.botService.Add(this.Url)
    this.router.navigate([''])
  }

}
