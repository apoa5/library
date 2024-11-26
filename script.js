//Array to store books
const myLibrary = [];

//Book constructor
function Book(title, author, pages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;
}

Book.prototype.toggleReadStatus = function () {
    this.hasBeenRead = !this.hasBeenRead;
};

//Manually create some books for now so I can see them
const book1 = new Book("Moby Dick", "Charles Dickens", 750, false);
myLibrary.push(book1);
const book2 = new Book("Diary of a wimpy kid", "Jeff Kiney", 420, true);
myLibrary.push(book2);

//Create function to add new book objects to the array of books
function addBookToLibrary(title, author, pages, hasbeenRead) {
    var book = new Book(title, author, pages, hasbeenRead);
    myLibrary.push(book);
}

console.log(myLibrary)

//Create function to display added book to page
const bookContainer = document.querySelector('.bookContainer');
function displayBook() {
    bookContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');

        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const read = document.createElement('div');
        const toggleReadButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        title.textContent = `${book.title}`;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `Number of Pages: ${book.pages}`;
        read.textContent = `Has been read? : ${book.hasBeenRead ? 'Yes' : 'No'}`;
        toggleReadButton.textContent = 'Toggle Read';
        deleteButton.textContent = 'Remove';

        toggleReadButton.classList.add('toggleButton');
        deleteButton.classList.add('deleteButton');
        title.classList.add('title');

        // Add event listeners to buttons
        toggleReadButton.addEventListener('click', () => {
            book.toggleReadStatus();
            displayBook();
        });

        deleteButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBook();
        });

        bookCard.append(title, author, pages, read, toggleReadButton, deleteButton);
        bookContainer.append(bookCard);
    });
}


displayBook();

//Event listeners to open a dialog modal when the 'New Book' button is pressed
const dialog = document.getElementById('dialog');
const closeDialogButton = document.getElementById('close-dialog');
const openDialogButton = document.getElementById('open-dialog');

openDialogButton.addEventListener("click", () => {
    dialog.showModal();
})

closeDialogButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})

const form = document.getElementById('book-form');


//Event listener to form to add new book to bookContainer
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const hasBeenRead = document.getElementById('book-read').checked;

    addBookToLibrary(title, author, parseInt(pages, 10), hasBeenRead);
    displayBook();

    form.reset();
    dialog.close();
})