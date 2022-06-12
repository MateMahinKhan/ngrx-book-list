import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { GoogleBooksService } from '../book-list/books.service';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private booksService: GoogleBooksService) {}

  loadbooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Book List] Load Books'),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map((books) => ({ type: '[Book List/API] Retrieve Books Success', books: books })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
