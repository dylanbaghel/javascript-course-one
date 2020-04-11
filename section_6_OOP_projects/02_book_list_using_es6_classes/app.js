// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class
class UI {
    addBookToList = function (book) {
        const list = document.getElementById('book-list');

        list.appendChild(this.createBookItem(book));
        this.showAlert('Book Added', 'success');
        new LStorage().addBookToLS(book);
    }

    loadBooks = function (books) {
        const list = document.querySelector('#book-list');

        const that = this;
        books.forEach(function (book) {
            list.appendChild(that.createBookItem(book));
        });
    }

    clearFields = function () {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    showAlert = function (message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        // Get Parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        const that = this;
        setTimeout(function () {
            that.clearAlert();
        }, 3000);
    }

    clearAlert = function () {
        document.querySelector('.alert').remove();
    }

    createBookItem = function (book) {
        const that = this;
        // Create tr element
        const tr = document.createElement('tr');

        // Create th elements
        const tdTitle = document.createElement('td');
        tdTitle.appendChild(document.createTextNode(book.title));
        tr.appendChild(tdTitle);

        const tdAuthor = document.createElement('td');
        tdAuthor.appendChild(document.createTextNode(book.author));
        tr.appendChild(tdAuthor);

        const tdisbn = document.createElement('td');
        tdisbn.appendChild(document.createTextNode(book.isbn));
        tr.appendChild(tdisbn);

        const tdDelete = document.createElement('td');
        const removeLink = document.createElement('a');
        removeLink.appendChild(document.createTextNode('X'));
        removeLink.className = 'btn btn-danger';

        // Remove Book
        removeLink.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.remove();
            that.showAlert('Book Deleted', 'success');
            new LStorage().removeBookFromLS(book);
        });

        tdDelete.appendChild(removeLink);
        tr.appendChild(tdDelete);

        // Return Final tr
        return tr;
    }
}

// Local Storage
class LStorage {
    addBookToLS = function (book) {
        const books = JSON.parse(localStorage.getItem('books')) || [];

        books.push({ ...book });

        localStorage.setItem('books', JSON.stringify(books));
    }

    getBooksFromLS = function () {
        return JSON.parse(localStorage.getItem('books')) || [];
    }

    removeBookFromLS = function (book) {
        console.log(book)
        let books = JSON.parse(localStorage.getItem('books')) || [];

        books = books.filter(function (b) {
            return book.title !== b.title;
        });
        console.log(books)
        localStorage.setItem('books', JSON.stringify(books));
    }
}


// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    const ui = new UI();
    const storage = new LStorage();
    ui.loadBooks(storage.getBooksFromLS());
});

document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting Form Values
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    // Instantiating Book
    const book = new Book(title, author, isbn);

    // Instantiating UI
    const ui = new UI();

    if (!title || !author || !isbn) {
        // Alert Message
        ui.showAlert('Please Fill In All Fields', 'danger');
        return;
    }

    // Add Book To List
    ui.addBookToList(book);
    ui.clearFields();
});