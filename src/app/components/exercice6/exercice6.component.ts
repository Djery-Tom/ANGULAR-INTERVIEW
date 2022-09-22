import { Component, OnInit } from '@angular/core';
import {BookService} from "../exercice5/book.service";

@Component({
  selector: 'app-exercice6',
  templateUrl: './exercice6.component.html',
  styleUrls: ['./exercice6.component.scss']
})
export class Exercice6Component implements OnInit {

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
