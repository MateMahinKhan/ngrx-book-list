import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { filteredQueryReducer } from './state/filtered-books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './state/books.effects';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      filterQuery: filteredQueryReducer,
    }),
    EffectsModule.forRoot([BooksEffects]),
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
