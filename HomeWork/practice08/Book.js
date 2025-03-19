/*
1. Create a class called Book
2. Create a constructor which takes title, genre, page
*/

class Book {
    constructor(title, genre, page) {
        this.title = title;
        this.genre = genre;
        this.page = page;
    }
}

module.exports = Book;