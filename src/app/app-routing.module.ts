import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Exercice1Component} from "./components/exercice1/exercice1.component";
import {Exercice2Component} from "./components/exercice2/exercice2.component";
import {Exercice3Component} from "./components/exercice3/exercice3.component";
import {Exercice4Component} from "./components/exercice4/exercice4.component";
import {Exercice5Component} from "./components/exercice5/exercice5.component";
import {Exercice6Component} from "./components/exercice6/exercice6.component";

const routes: Routes = [
  {
    path: 'exercice1',
    component : Exercice1Component,
  },
  {
    path: 'exercice2',
    component : Exercice2Component,
  },
  {
    path: 'exercice3',
    component : Exercice3Component,
  },
  {
    path: 'exercice4',
    component : Exercice4Component,
  },
  {
    path: 'exercice5',
    component : Exercice5Component,
  },
  {
    path: 'exercice6',
    component : Exercice6Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
