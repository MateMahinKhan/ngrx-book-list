import { Book } from '../book-list/books.model';

export interface AppState {
  books: ReadonlyArray<Book>;
  filterQuery: string;
  collection: ReadonlyArray<string>;
}
