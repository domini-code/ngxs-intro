import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxsModule.forRoot([], {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
