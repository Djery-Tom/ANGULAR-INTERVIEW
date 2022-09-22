import { Component, OnInit } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  private bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(delay(1000));
  public bookList :string[] =  [];

  constructor() { }

  ngOnInit(): void {
    this.bookList$.subscribe((books: string[]) => this.bookList = books)
  }

}
