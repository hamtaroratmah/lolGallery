import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './component/champions/champions.component';
import { ChampionComponent } from './component/champion/champion.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ChampionsComponent,
    ChampionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ChampionsModule { }
