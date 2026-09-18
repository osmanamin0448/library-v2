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

/* ===== Add Book to Library===== */
function addBookToLibrary(title, author, pages, read){
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}
addBookToLibrary("me", 'him',299,"read");
addBookToLibrary('you', "now",299,"not read")


/* ===== Display Book ===== */
function displayBook(){
  let shelve = document.querySelector('.shelve')

  for(let book of myLibrary){
    const bookCard = document.createElement("div")
    bookCard.classList.add("book-card")

    const bookTitle = document.createElement("h1");

    const bookAuthor = document.createElement("h3");
    bookAuthor.classList.add("book-author")

    const bookPages = document.createElement("p");
    bookPages.classList.add(".book-pages");

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

displayBook();


