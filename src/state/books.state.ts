import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { AddBook, GetBook, UpdateBook, DeleteBook } from './books.actions';
import { Book } from 'src/app/shared/book.interface';

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
  @Action(AddBook)
  addBook(
    { getState, setState }: StateContext<BooksStateModel>,
    { payload }: AddBook
  ): void {
    const state = getState();
  }

  @Action(GetBook)
  getBook({ getState, setState }: StateContext<BooksStateModel>): void {
    const state = getState();
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
