import { Component, OnInit } from '@angular/core';
import { BotsService } from 'src/app/services/bots.service';

@Component({
  selector: 'app-botslist',
  templateUrl: './botslist.component.html',
  styleUrls: ['./botslist.component.scss']
})
export class BotslistComponent implements OnInit {

  constructor(readonly botService: BotsService) { }

  ngOnInit(): void {
    
  }

  Go() {
    this.botService.Go()
  }
}
