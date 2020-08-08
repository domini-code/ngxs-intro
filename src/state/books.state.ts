import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AddBook, GetBooks, UpdateBook, DeleteBook } from './books.actions';
import { BooksService } from './../app/shared/books.service';
import { Book } from './../app/shared/book.interface';

export class BooksStateModel {
  public books: Book[];
  public selectedBook: Book;
}

@State<BooksStateModel>({
  name: 'books',
  defaults: {
    books: [],
    selectedBook: null,
  },
})
@Injectable()
export class BooksState {
  constructor(private readonly bookSvc: BooksService) {}

  @Selector()
  public static getBookList({ books }: BooksStateModel): Book[] {
    return books;
  }

  @Selector()
  public static getSelectedBook({ selectedBook }): Book {
    return selectedBook;
  }

  @Action(AddBook)
  addBook(
    { getState, patchState }: StateContext<BooksStateModel>,
    { payload }: AddBook
  ): Observable<Book> {
    return this.bookSvc.addBook(payload).pipe(
      tap((book) => {
        const state = getState();
        patchState({
          // books: [...state.books, book],
          books: [...state.books],
        });
      })
    );
  }

  @Action(GetBooks)
  getBook({
    getState,
    setState,
  }: StateContext<BooksStateModel>): Observable<any> {
    return this.bookSvc.getBooks().pipe(
      tap((books) => {
        const state = getState();
        setState({ ...state, books });
      })
    );
  }

  @Action(UpdateBook)
  updateBook(
    { getState, setState }: StateContext<BooksStateModel>,
    { payload }: UpdateBook
  ): void {
    const state = getState();
  }

  @Action(DeleteBook)
  deleteBook(
    { getState, setState }: StateContext<BooksStateModel>,
    { id }: DeleteBook
  ): void {
    const state = getState();
  }
}
