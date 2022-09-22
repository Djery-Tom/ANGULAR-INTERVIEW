import { Component, OnInit } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component {

  public bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(delay(1000));

  constructor() { }

}
