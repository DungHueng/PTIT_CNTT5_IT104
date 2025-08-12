class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        return `${this.name}`;
    }
}
class students extends Person {
    id;
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        return `${this.id}, ${super.displayInfo()}`;
    }
}
class teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        return `${super.displayInfo()}, ${this.subject}`;
    }
}
const Students = new students(1, "jake");
console.log(Students.displayInfo());
const Teacher = new teacher("Hai", "Reach JS");
console.log(Teacher.displayInfo());
export {};
//# sourceMappingURL=Bai_04.js.map