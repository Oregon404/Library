const librabry = document.querySelector('.library')
const books = document.querySelector('.books')

let myLibrary = [
];

function createBookElement(el, content, className){
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}

function createBookItem (book, index){
    const bookItem = document.createElement('div')
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'card')
    bookItem.appendChild(
        createBookElement('h4', `Title: ${book.title}`, 'book-title')
    );
    bookItem.appendChild(
        createBookElement('h4', `Author: ${book.author}`, 'book-author')
    );
    bookItem.appendChild(
        createBookElement('h4', `Pages: ${book.pages}`, 'book-pages')
    );
    bookItem.appendChild(
        createBookElement('h4', `Read: ${book.read}`, 'book-read')
    );

    books.insertAdjacentElement("afterbegin", bookItem);

}

function showBooks (){
    books.textContent = '';
    myLibrary.map((book, index) => {
        createBookItem(book, index)
    })
}

class book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addNewBook(title, author, pages, read){
    myLibrary.push(new book(title, author, pages, read));
    saveAndRenderBooks();
}


//read has not been added
function getUsrInput(title, author, pages, read){
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    read = document.getElementById('read');
    addNewBook(title, author, pages);
}

function createBook(){
    getUsrInput();
    showBooks();
}

function saveAndRenderBooks() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
    showBooks();
  }

  function addLocalStorage() {
    myLibrary = JSON.parse(localStorage.getItem("library")) || [];
    saveAndRenderBooks();
  }

  addLocalStorage();