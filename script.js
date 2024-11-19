//Array to store books
const myLibrary = [];

//Book constructor
function Book(title, author, pages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;
}

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
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const read = document.createElement('div');

        title.textContent = `Title: ${myLibrary[i].title}`;
        author.textContent = `Author: ${myLibrary[i].author}`;
        pages.textContent = `Number of Pages: ${String(myLibrary[i].pages)}`;
        read.textContent = `Has been read? : ${String(myLibrary[i].hasBeenRead)}`;
        bookCard.append(title, author, pages, read);
        bookContainer.append(bookCard);
    }

}

displayBook();

//Event listeners to open a dialog modal when the 'New Book' button is pressed

const dialog = document.getElementById('dialog');
const closeDialogButton = document.getElementById('close-dialog');
const openDialogButton = document.getElementById('open-dialog');

openDialogButton.addEventListener("click", ()=>{
    dialog.showModal();
})

closeDialogButton.addEventListener("click", (e)=>{
    e.preventDefault();
    dialog.close();
})