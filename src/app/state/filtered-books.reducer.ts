import { createReducer, on } from '@ngrx/store';
import { Book } from '../book-list/books.model';
import { retrievedBookList, filterBookList } from './books.actions';

export const initialState: string = '';

export const filteredQueryReducer = createReducer(
  initialState,
  on(filterBookList, (state, { name }) => name)
);
