class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title,
            this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(title) {
        return this.title = title;
    }
    setAuthor(author) {
        return this.author = author;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    printBook() {
        for (const book of this.books) {
            console.log(`Ten: ${book.getTitle()}  Ten tac gia :${book.getAuthor()}`);
        }
    }
}
let book1 = new Book("Dragon ball", "Akira Toriyama");
let book2 = new Book("One piece", "Eiichiro Oda");
let book3 = new Book("Naruto", "Masashi Kishimoto");
let book4 = new Book("JOJO", "Hirohiko Araki");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.printBook();
export {};
//# sourceMappingURL=Bai_06.js.map