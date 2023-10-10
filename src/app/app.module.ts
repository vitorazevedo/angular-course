import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
