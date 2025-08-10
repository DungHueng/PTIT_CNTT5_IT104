class Student{
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    speak(){
        console.log(`Sinh viên có ID là ${this.id}, ${this.age} tuổi và email là: ${this.email}`);
    }
}

let students: Student[] = [
    new Student(1, 20, 'NguyenA@gmail.com'),
    new Student(2, 19, 'TranB@gmail.com'),
    new Student(3, 18, 'ThiC@gmail.com')
];

for (let student of students) {
    student.speak();
}