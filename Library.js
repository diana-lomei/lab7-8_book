// Library.js
const Book = require('./Book');

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (!(book instanceof Book)) throw new Error('Invalid book');
    this.books.push(book);
  }

  removeBook(title) {
    const index = this.books.findIndex(b => b.title === title);
    if (index === -1) throw new Error('Book not found');
    this.books.splice(index, 1);
  }

  findBookByTitle(title) {
    return this.books.filter(b => b.title.includes(title));
  }

  findBookByAuthor(author) {
    return this.books.filter(b => b.author.includes(author));
  }

  getBooksCount() {
    return this.books.length;
  }
}

module.exports = Library;
