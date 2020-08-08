export class BooksAction {
  static readonly type = '[Books] Add item';
  constructor(public payload: string) { }
}
