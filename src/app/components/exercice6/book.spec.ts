import { BookModel } from './book.model.';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new BookModel()).toBeTruthy();
  });
});
