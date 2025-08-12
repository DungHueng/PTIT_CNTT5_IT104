abstract class Person {
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    displayInfo(): string {
        return `${this.name}`;       
    }
}

class students extends Person {
    id: number;
    constructor(id: number, name: string){
        super(name);
        this.id = id;
    }
    displayInfo(): string {
        return `${this.id}, ${super.displayInfo()}`;
    }
}

class teacher extends Person {
    subject: string;
    constructor(name: string, subject: string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): string {
        return `${super.displayInfo()}, ${this.subject}`;
    }
}

const Students = new students(1, "jake");
console.log(Students.displayInfo());
const Teacher = new teacher("Hai", "Reach JS");
console.log(Teacher.displayInfo());
