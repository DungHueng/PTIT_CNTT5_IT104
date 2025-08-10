class __Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id,
            this.title = title,
            this.author = author;
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
    setId(id) {
        return this.id = id;
    }
    setTitle(title) {
        return this.title = title;
    }
    setAuthor(author) {
        return this.author = author;
    }
}
class __Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    printBook() {
        for (const book of this.books) {
            console.log(`ID : ${book.getId()} Ten: ${book.getTitle()}  Ten tac gia :${book.getAuthor()}`);
        }
    }
    UpdateBook(id, newTitle, newAuthor) {
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
    seachBook(name) {
        let check = -1;
        for (const book of this.books) {
            if (book.getTitle().toLowerCase().includes(name.toLowerCase())) {
                console.log(`ID : ${book.getId()} Ten: ${book.getTitle()}  Ten tac gia :${book.getAuthor()}`);
                check++;
            }
        }
        if (check == -1) {
            console.log(`khong tim thay sach`);
        }
    }
}
let _book1 = new __Book(1, "Dragon ball", "Akira Toriyama");
let _book2 = new __Book(2, "One piece", "Eiichiro Oda");
let _book3 = new __Book(3, "Naruto", "Masashi Kishimoto");
let _book4 = new __Book(4, "JOJO", "Hirohiko Araki");
let library2 = new __Library();
library2.addBook(_book1);
library2.addBook(_book2);
library2.addBook(_book3);
library2.addBook(_book4);
library2.seachBook("Dragon ball");
library2.seachBook("Super");
export {};
//# sourceMappingURL=Bai_08.js.map