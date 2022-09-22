import { Component, OnInit } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.scss']
})
export class Exercice3Component implements OnInit {

  private bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(delay(1000));
  public bookList :string[] =  [];

  public loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loading = true;
    this.bookList$.subscribe({
      next : (books: string[]) => this.bookList = books,
      complete: () => { this.loading = false}
    })
  }

}
