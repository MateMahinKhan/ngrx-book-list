import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import { selectBooks, selectBookCollection, selectFilteredBooks } from './state/books.selectors';
import { addBook, filterBookList, removeBook, retrievedBookList, loadBooks } from './state/books.actions';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  filteredBooks$ = this.store.select(selectFilteredBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  // myForm = this.formBuilder.group({
  //   searchField: ['', Validators.required],
  // });

  searchField = new FormControl('');

  constructor(
    private booksService: GoogleBooksService,
    private store: Store,
    private formBuilder: FormBuilder
  ) {}

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  onFilter(name: string) {
    console.log(name);
    this.store.dispatch(filterBookList({ name }));
  }

  ngOnInit() {
    // this.booksService.getBooks().subscribe((books) => {
    //   this.store.dispatch(retrievedBookList({ books }));
    // });

    this.store.dispatch(loadBooks());

    this.searchField.valueChanges
      .pipe(
        debounceTime(200),
        map((v: string) => v.toLowerCase())
      )
      .subscribe((name) => this.onFilter(name));
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
