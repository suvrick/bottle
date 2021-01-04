import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  Items: MenuItem[]
  isActive = false
  constructor() { 
    
  }

  ngOnInit(): void {
    this.Items = [
      { Title: "Главная", Action: "onLoad", Items: []},
      { Title: "Добавить", Action: "onLoad", Items: [
        { Title: "Добавить ссылкой", Action: "onLoad", Items: []},
        { Title: "Загрузить из файла", Action: "onLoad", Items: []}
      ]},
      { Title: "Действие", Action: "onLoad", Items: [
        { Title: "Обновить", Action: "onLoad", Items: []},
        { Title: "Отправить подарок", Action: "onLoad", Items: []}
      ]},
      { Title: "Настройки", Action: "onLoad", Items: []}
    ]

    console.log(this.Items)
  }

  onLoad() {
    this.isActive = false
  }

}

export class MenuItem {
  Title: string
  Action: string
  Items: Array<MenuItem>
}
