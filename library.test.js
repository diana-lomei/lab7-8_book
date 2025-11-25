const Library = require('../Library');
const Book = require('../Book');

describe('Library', () => {
  let lib;
  let book1, book2;

  beforeEach(() => {
    lib = new Library();
    book1 = new Book('Book One', 'Author A', 2020);
    book2 = new Book('Book Two', 'Author B', 2021);
  });

  test('addBook works', () => {
    lib.addBook(book1);
    expect(lib.getBooksCount()).toBe(1);
  });

  test('addBook throws error for invalid book', () => {
    expect(() => lib.addBook({})).toThrow('Invalid book');
  });

  test('removeBook works', () => {
    lib.addBook(book1);
    lib.removeBook('Book One');
    expect(lib.getBooksCount()).toBe(0);
  });

  test('removeBook throws error if not found', () => {
    expect(() => lib.removeBook('No Book')).toThrow('Book not found');
  });

  test('findBookByTitle returns correct book', () => {
    lib.addBook(book1);
    lib.addBook(book2);
    const results = lib.findBookByTitle('Book One');
    expect(results).toContain(book1);
  });

  test('findBookByAuthor returns correct book', () => {
    lib.addBook(book1);
    lib.addBook(book2);
    const results = lib.findBookByAuthor('Author B');
    expect(results).toContain(book2);
  });

  test('getBooksCount returns correct number', () => {
    lib.addBook(book1);
    lib.addBook(book2);
    expect(lib.getBooksCount()).toBe(2);
  });

  test('multiple books with same author', () => {
    const book3 = new Book('Book Three', 'Author A');
    lib.addBook(book1);
    lib.addBook(book3);
    const results = lib.findBookByAuthor('Author A');
    expect(results.length).toBe(2);
  });

  test('multiple books with same title', () => {
    const book4 = new Book('Book One', 'Author C');
    lib.addBook(book1);
    lib.addBook(book4);
    const results = lib.findBookByTitle('Book One');
    expect(results.length).toBe(2);
  });

  test('removeBook works with multiple same title', () => {
    const book4 = new Book('Book One', 'Author C');
    lib.addBook(book1);
    lib.addBook(book4);
    lib.removeBook('Book One');
    expect(lib.getBooksCount()).toBe(1);
  });

  test('findBookByTitle returns empty array if none', () => {
    lib.addBook(book1);
    const results = lib.findBookByTitle('No Book');
    expect(results).toEqual([]);
  });

  test('findBookByAuthor returns empty array if none', () => {
    lib.addBook(book1);
    const results = lib.findBookByAuthor('No Author');
    expect(results).toEqual([]);
  });

  test('removeBook does not remove other books', () => {
    lib.addBook(book1);
    lib.addBook(book2);
    lib.removeBook('Book One');
    expect(lib.getBooksCount()).toBe(1);
    expect(lib.findBookByTitle('Book Two')).toContain(book2);
  });
});
