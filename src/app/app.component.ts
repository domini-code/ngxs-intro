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

  constructor(private booksSvc: BooksService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetBooks());

    // const newBook = {
    //   id: 18,
    //   name: 'Hola mundo!',
    // };
    // this.booksSvc.addBook(newBook).subscribe((res) => {
    //   console.log('AddBook->', res);
    // });

    // this.booksSvc.getBooks().subscribe((res) => {
    //   // console.log('GetBooks->', res);
    // });

    // this.booksSvc.updateBook(newBook).subscribe((res) => {
    //   // console.log('UpdateBooks->', res);
    // });

    // this.booksSvc.deleteBook(2).subscribe((res) => {
    //   // console.log('DeleteBooks->', res);
    // });
  }

  addNew(): void {
    const newBook = {
      id: 20,
      name: 'Adios mundo!',
    };
    this.store.dispatch(new AddBook(newBook));
  }
}
