import { DeleteBook, UpdateBook } from './../state/books.actions';
import { BooksState } from './../state/books.state';
import { BooksService } from './shared/books.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Book } from './shared/book.interface';
import { GetBooks, AddBook } from 'src/state/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Select(BooksState.getBookList) books$: Observable<Book[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetBooks());
  }

  onAddNew(): void {
    const newBook = {
      id: 20,
      name: 'Adios mundo!',
    };
    this.store.dispatch(new AddBook(newBook));
  }

  onUpdateBook(): void {
    const updateBook = {
      id: 3,
      name: 'Mundo Cruel!',
    };
    this.store.dispatch(new UpdateBook(updateBook));
  }

  onDeleteBook(): void {
    this.store.dispatch(new DeleteBook(3));
  }
}
