import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookList: string[] = [];

  constructor() {
    this.bookList.push('📙', '📕', '📗', '📘');
  }

  public getBooks() {
      return of(this.bookList).pipe(delay(1000));
  }

  public addBook(book: string) {
    this.bookList.push(book);
  }

  public deleteBook(book: string) {
    this.bookList = this.bookList.filter((b) => b != book);
  }
}
