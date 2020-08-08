import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { BooksState } from './../state/books.state';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxsModule.forRoot([BooksState])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
