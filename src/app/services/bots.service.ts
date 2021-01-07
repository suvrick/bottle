import { Injectable } from '@angular/core';
import { Bot, connectAndLogin, Parse } from '../game/game';

@Injectable({
  providedIn: 'root'
})
export class BotsService {

  Bots: Bot[] = Array() 
  constructor() {}

  LoadFromFile(lines: string[]): void {
    lines.forEach(element => {
      //this.Bots.push()
    });
  }

  Add(url: string) {
    // this.Bots.push()
  }

  Go() {
    let l = connectAndLogin()
    console.log(l)
  }
}



