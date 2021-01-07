import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbotComponent } from './views/addbot/addbot.component';
import { BotslistComponent } from './views/botslist/botslist.component';
import { DashbordComponent } from './views/dashbord/dashbord.component';
import { SettingComponent } from './views/setting/setting.component';

const routes: Routes = [
  { path: "", component: DashbordComponent},
  { path: "setting", component: SettingComponent },
  { path: "addbot", component: AddbotComponent },
  { path: "list", component: BotslistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
