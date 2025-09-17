class __Book1 {
    private id:number;
    private title:string;
    private author:string;
    constructor(id:number,title:string,author:string) {
        this.id=id,
        this.title=title,
        this.author=author
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }
    setId(id:number){
        return this.id=id;
    }
    setTitle(title:string){
       return this.title=title;
    }
    setAuthor(author:string){
        return this.author=author;
    }
}
class __Library1 {
       books:__Book1[]=[];
    addBook(book:__Book1){
        this.books.push(book);
    }
    printBook(){
        for (const book of this.books) {
            console.log(`ID : ${book.getId()} Ten: ${book.getTitle()}  Ten tac gia :${book.getAuthor()}`);
        }
    }
     UpdateBook(id:number,newTitle:string,newAuthor:string) {
    for (const book of this.books) {
        if (book.getId()==id) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            return;
        }
    }
    console.log(`khong tim thay sach`);
    return;
}
seachBook(name:string){
    let check=-1;
    for (const book of this.books) {
        if(book.getTitle().toLowerCase().includes(name.toLowerCase())){
               console.log(`ID : ${book.getId()} Ten: ${book.getTitle()}  Ten tac gia :${book.getAuthor()}`);
               check++;
        }
    }
    if (check==-1) {
        console.log(`khong tim thay sach`);
        
    }
}
deleteBook(id:number){
    const index = this.books.findIndex(book => book.getId() === id);
    if (index !== -1) {
        this.books.splice(index, 1);
        return;
    }
    console.log("khong tim thay sach");
    
}
    }
let __book1= new __Book1(1,"Dragon ball","Akira Toriyama");
let __book2 =new __Book1(2,"One piece","Eiichiro Oda");
let __book3 =new __Book1(3,"Naruto","Masashi Kishimoto");
let __book4=new __Book1(4,"JOJO","Hirohiko Araki");
let library3=new __Library1();

library3.addBook(__book1);
library3.addBook(__book2);
library3.addBook(__book3);
library3.addBook(__book4);
library3.printBook();
library3.deleteBook(1);
library3.deleteBook(8);
console.log(`sau khi xoa`);

library3.printBook();