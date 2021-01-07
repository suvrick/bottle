import { Component, OnInit } from '@angular/core';
import { BotsService } from 'src/app/services/bots.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(readonly botService: BotsService) { }

  ngOnInit(): void {
  }

}
