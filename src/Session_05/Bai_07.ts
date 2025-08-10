class _Book {
    private id: number;
    private title: string;
    private author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id,
            this.title = title,
            this.author = author
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setId(id: number) {
        return this.id = id;
    }
    setTitle(title: string) {
        return this.title = title;
    }
    setAuthor(author: string) {
        return this.author = author;
    }
}
class _Library {
    books: _Book[] = [];
    addBook(book: _Book) {
        this.books.push(book);
    }
    printBook() {
        for (const book of this.books) {
            console.log(`ID : ${book.getId()} Ten: ${book.getTitle()}  Ten tac gia :${book.getAuthor()}`);
        }
    }
    UpdateBook(id: number, newTitle: string, newAuthor: string) {
        for (const book of this.books) {
            if (book.getId() == id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                return;
            }
        }
        console.log(`khong tim thay sach`);
        return;
    }
}
let book1 = new _Book(1, "Dragon ball", "Akira Toriyama");
let book2 = new _Book(2, "One piece", "Eiichiro Oda");
let book3 = new _Book(3, "Naruto", "Masashi Kishimoto");
let book4 = new _Book(4, "JOJO", "Hirohiko Araki");
let library1 = new _Library();

library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);
library1.addBook(book4);
library1.printBook();

library1.UpdateBook(1, "Dragon ball Super", "Toyotarou");
console.log('sau khi cap nhat');

library1.printBook();