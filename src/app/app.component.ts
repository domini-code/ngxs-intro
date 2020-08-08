import { BooksService } from './shared/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private booksSvc: BooksService) {}

  ngOnInit(): void {
    const newBook = {
      id: 15,
      name: 'string',
    };
    this.booksSvc.addBook(newBook).subscribe((res) => {
      // console.log('AddBook->', res);
    });

    this.booksSvc.getBooks().subscribe((res) => {
      // console.log('GetBooks->', res);
    });

    this.booksSvc.updateBook(newBook).subscribe((res) => {
      // console.log('UpdateBooks->', res);
    });

    this.booksSvc.deleteBook(2).subscribe((res) => {
      // console.log('DeleteBooks->', res);
    });
  }
}
