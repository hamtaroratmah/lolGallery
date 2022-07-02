import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import {HeaderComponent} from "./component/header/header.component";
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import {AppRoutingModule} from "../app.routing";

@NgModule({
  declarations: [
    HeaderComponent,
    LandingPageComponent,
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
  exports: [
    HeaderComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
