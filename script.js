/* =====  Array to store books ===== */
const myLibrary = [];

/* ===== Creates Book ===== */
function Book(title,author, pages, read){
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/* ===== Add Book to Library ===== */
function addBookToLibrary(title, author, pages, read){
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

/* ===== Display Book ===== */
function displayBook(){
  let shelve = document.querySelector('.shelve')
  
  // Clear the shelf before displaying books to prevent duplication
  shelve.innerHTML = "";  

  for(let book of myLibrary){
    const bookCard = document.createElement("div")
    bookCard.classList.add("book-card")

    const bookTitle = document.createElement("h1");

    const bookAuthor = document.createElement("h3");
    bookAuthor.classList.add("book-author")

    const bookPages = document.createElement("p");
    bookPages.classList.add("book-pages");

    const bookRead = document.createElement("p");
    bookRead.classList.add("book-read");

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookRead.textContent = book.read;

    bookCard.append(bookTitle, bookAuthor, bookPages,bookRead)
    shelve.append(bookCard)
  }
}

const addBook = document.querySelector(".add-book");
const dialog = document.querySelector("dialog");

/* ===== Open a Form Window to Enter book Info =====*/
addBook.addEventListener("click", () => {
  dialog.showModal();
})


const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value
  const read = document.querySelector("#read").value

  addBookToLibrary(title, author, pages, read);

  displayBook();

  dialog.close();
  form.reset();
  
})

/* ===== Close the Form Window =====*/
const cancelBtn = document.querySelector(".cancel-btn");
cancelBtn.addEventListener("click", () => {
  dialog.close();
})


