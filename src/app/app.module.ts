import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Exercice1Component} from "./components/exercice1/exercice1.component";
import { Exercice2Component } from './components/exercice2/exercice2.component';
import { Exercice3Component } from './components/exercice3/exercice3.component';
import { Exercice4Component } from './components/exercice4/exercice4.component';
import { Exercice5Component } from './components/exercice5/exercice5.component';
import { Exercice6Component } from './components/exercice6/exercice6.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    Exercice2Component,
    Exercice3Component,
    Exercice4Component,
    Exercice5Component,
    Exercice6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
