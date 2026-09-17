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

function addBookToLibrary(title, author, pages, read){
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  console.log(myLibrary)
}


