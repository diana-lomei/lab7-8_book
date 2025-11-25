// Book.js
class Book {
  constructor(title, author, year) {
    if (!title || !author) throw new Error('Title and author are required');
    this.title = title;
    this.author = author;
    this.year = year || null;
  }
}

module.exports = Book;
