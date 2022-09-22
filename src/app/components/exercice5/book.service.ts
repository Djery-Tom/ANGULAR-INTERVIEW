import { Injectable } from '@angular/core';
import {BehaviorSubject, delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookList: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['📙', '📕', '📗', '📘']);
  public readonly bookList$: Observable<string[]> = this.bookList.asObservable();

  constructor() {
  }

  public addBook(book: string) {
    let books:string[] = this.bookList.getValue();
    books.push(book);
    this.storeBooks(books);
  }

  public deleteBook(book: string) {
    let books:string[] = this.bookList.getValue();
    books = books.filter((b) => b != book);
    this.storeBooks(books);
  }

  private storeBooks(books: string[]){
    localStorage.setItem('books', JSON.stringify(books));
    this.bookList.next(books);
  }
}
