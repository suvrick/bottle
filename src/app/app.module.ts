import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './views/dashbord/dashbord.component';
import { HeaderComponent } from './components/header/header.component';
import { SettingComponent } from './views/setting/setting.component';
import { StateComponent } from './components/state/state.component';
import { AddbotComponent } from './views/addbot/addbot.component';
import { BotslistComponent } from './views/botslist/botslist.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    HeaderComponent,
    SettingComponent,
    StateComponent,
    AddbotComponent,
    BotslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
