class Students {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    Students = [];
    printStudents() {
        for (const student of this.Students) {
            console.log(`ID:${student.getID()} Name: ${student.getName()}`);
        }
    }
    addStudents(student) {
        this.Students.push(student);
    }
    filterStudents(id) {
        let check = -1;
        for (const student of this.Students) {
            if (student.getID() === id) {
                console.log(`ID:${student.getID()} Name: ${student.getName()}`);
                check++;
            }
        }
        if (check === -1) {
            console.log("Không tìm thấy ID");
        }
    }
    addStudentsInClass(id) {
        let check = -1;
        for (const student of allStudents) {
            if (student.getID() === id) {
                const index = allStudents.indexOf(student);
                this.Students.push(student);
                allStudents.splice(index, 1);
                check++;
                return;
            }
        }
        if (check === -1) {
            console.log("Không tìm thấy ID này");
            return;
        }
    }
}
allStudents.push(new Students(1, "Thanh"), new Students(2, "Phương"), new Students(3, "Chiến"), new Students(4, "Huy"), new Students(5, "Minh"));
let classA = new Classroom();
let classB = new Classroom();
classA.addStudentsInClass(1);
classA.addStudentsInClass(2);
classA.addStudentsInClass(3);
classB.addStudentsInClass(4);
classB.addStudentsInClass(5);
classB.addStudentsInClass(6);
classA.printStudents();
classB.printStudents();
export {};
//# sourceMappingURL=Bai_06.js.map