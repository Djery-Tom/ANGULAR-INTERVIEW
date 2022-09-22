import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";

@Component({
  selector: 'app-exercice5',
  templateUrl: './exercice5.component.html',
  styleUrls: ['./exercice5.component.scss']
})
export class Exercice5Component implements OnInit {

  public bookList :string[] =  [];
  public loading: boolean = false;

  constructor(private _bookService : BookService) { }

  ngOnInit(): void {
    this.loading = true;
    this._bookService.bookList$.subscribe({
      next : (books: string[]) => this.bookList = books,
      complete: () => { this.loading = false}
    })
  }

}
