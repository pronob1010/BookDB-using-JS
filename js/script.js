let form = document.querySelector("#book-form");
// let table = document.getElementById("book-list");
let bookList = document.querySelector('#book-list');



class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI {
    constructor() {

    }

    addBookList(book) {
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
    showAlert(text, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(text));

        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    deleteFromBook(target){
        if (target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
        }
        // console.log(target);
    }

        clearfields() {
            let title = document.querySelector("#title").value = '';
            let author = document.querySelector("#author").value = '';
            let isbn = document.querySelector("#isbn").value = '';
        }
    }

    form.addEventListener('submit', newBook);
    bookList.addEventListener('click', removeBook);

    function newBook(e) {
        // console.log("Hello");
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let isbn = document.querySelector("#isbn").value;

        let ui = new UI();

        if (title === '' || author === "" || isbn === "") {
            // alert("dfdf");
            ui.showAlert("Something is wrong !!!", "error");
        } else {

            let book = new Book(title, author, isbn);
            // console.log(book);

            ui.addBookList(book);
            ui.clearfields();
            ui.showAlert("Successfully added!!!", "success");

        }
        e.preventDefault();
    }

    function removeBook(e){
        
        let ui = new UI();

        ui.deleteFromBook(e.target);
        ui.showAlert('Book Removed!', 'success');
        e.preventDefault();
    }