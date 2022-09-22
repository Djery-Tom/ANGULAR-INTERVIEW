import { Component, OnInit } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {BookService} from "./book.service";

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.scss']
})
export class Exercice4Component implements OnInit {

  public bookList :string[] =  [];
  public loading: boolean = false;

  constructor(private _bookService : BookService) { }

  ngOnInit(): void {
    this.loading = true;
    this._bookService.getBooks().subscribe({
      next : (books: string[]) => this.bookList = books,
      complete: () => { this.loading = false}
    })
  }

}
