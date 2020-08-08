import { Book } from '../app/shared/book.interface';

export class AddBook {
  static readonly type = '[Books] Add';
  constructor(public payload: Book) {}
}
export class GetBook {
  static readonly type = '[Books] Get';
}
export class UpdateBook {
  static readonly type = '[Books] Update';
  constructor(public payload: Book) {}
}
export class DeleteBook {
  static readonly type = '[Books] Delete';
  constructor(public id: string) {}
}
