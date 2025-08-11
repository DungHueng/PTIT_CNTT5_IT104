class Book {
  private title: string;
  private author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  setTitle(title: string) {
    return (this.title = title);
  }
  setAuthor(author: string) {
    return (this.author = author);
  }
}

class Library {
  books: Book[] = [];
  addBook(book: Book) {
    this.books.push(book);
  }
  printBook() {
    for (const book of this.books) {
      console.log(`Ten: ${book.getTitle()} Ten tac gia: ${book.getAuthor()}`);
    }
  }
}

let book1 = new Book("Dragon ball", "Akira Toriyama");
let book2 = new Book("One piece", "Eiichiro Oda");
let book3 = new Book("Naruto", "Masashi Kishimoto");
let book4 = new Book("JOJO", "Hirohiko Araki");
let book5 = new Book("Attack on Titan", "Hajime Isayama");
let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printBook();
