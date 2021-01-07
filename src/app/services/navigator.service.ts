import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BotsService } from './bots.service';

@Injectable({
  providedIn: 'root'
})

export class NavigatorService {
  IsActiveMenu = false
  Items: MenuItem[]

  constructor(private router: Router, private botService: BotsService) {
    this.Items = [
      { Title: "Главная", Icon: "dashboard", Action: "toHome" },
      {
        Title: "Добавить", Icon: "note_add", Items: [
          { Title: "Добавить ссылкой", Action: "onAdd" },
          { Title: "Загрузить из файла", Action: "onLoadFromFile" }
        ]
      },
      {
        Title: "Действие", Icon: "grade", Items: [
          { Title: "Обновить", Icon: "wifi_protected_setup", Action: "onLoad" },
          { Title: "Отправить подарок", Icon: "card_giftcard", Action: "onLoad" }
        ]
      },
      { Title: "Настройки", Icon: "settings", Action: "onSetting" }
    ]

  }

  Do(action: string) {

    console.log(action)

    if (action === undefined || action === "")
      return;

    this.IsActiveMenu = false
    switch (action) {
      case "toHome":
        this.router.navigate([''])
        break;
      case "onAdd":
        this.router.navigate(['/addbot'])
        break;
      case "onLoadFromFile":
        this.onLoadFromFile()
        break;
      case "onSetting":
        this.router.navigate(['/setting'])
        break;
      default:
        break;
    }
  }

  onLoadFromFile() {
    var loadTempArray = new Array()
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e: any) => {
      var file = e.target.files[0]
      let reader = new FileReader();
      reader.onload = () => {

        if(reader.result) {
          var arrText = reader.result as string
          var lines = arrText.split('n')
          for (let i = 0; i < lines.length; i++) {
            const elem = lines[i];
            if(elem) {
              loadTempArray.push(elem)
            }
          }
        }

        this.botService.LoadFromFile(loadTempArray)
        console.log(loadTempArray);
      };

      reader.onerror = function() {
        console.log(reader.error);
      };

      reader.readAsText(file);
      this.router.navigate([''])
    }
    input.click();
  }
}


export class MenuItem {
  Title: string
  Icon?: string
  Action?: string
  Items?: Array<MenuItem>
}
