const Book = require('../Book');

describe('Book', () => {
  test('create book with title and author', () => {
    const book = new Book('Title', 'Author', 2023);
    expect(book.title).toBe('Title');
    expect(book.author).toBe('Author');
    expect(book.year).toBe(2023);
  });

  test('throw error if missing title', () => {
    expect(() => new Book(null, 'Author')).toThrow();
  });

  test('throw error if missing author', () => {
    expect(() => new Book('Title', null)).toThrow();
  });

  test('year is optional', () => {
    const book = new Book('Title', 'Author');
    expect(book.year).toBeNull();
  });
});
