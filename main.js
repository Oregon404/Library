let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addNewBook(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}
