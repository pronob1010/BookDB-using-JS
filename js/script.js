let form = document.querySelector("#book-form");
// let table = document.getElementById("book-list");



class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI {
    constructor(){

    }

    addBookList(book){
        let list = document.getElementById('book-list');
        let row = document.createElement('tr');

        row.innerHTML = 
        `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
        //console.log(row);
    }

    clearfields(){
        let title = document.querySelector("#title").value='';
        let author = document.querySelector("#author").value='';
        let isbn = document.querySelector("#isbn").value='';
    }
}
form.addEventListener('submit', newBook);

function newBook(e){
    // console.log("Hello");
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;

    let book = new Book(title, author, isbn);
    // console.log(book);
    
    let ui = new UI();
    ui.addBookList(book);
    ui.clearfields();
    
    e.preventDefault();
}