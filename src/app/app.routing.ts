import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChampionsComponent} from "./champions/component/champions/champions.component";
import { LandingPageComponent } from './core/component/landing-page/landing-page.component';
import {ItemsComponent} from "./items/component/items/items.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'champions', component: ChampionsComponent},
  { path: 'items', component: ItemsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
