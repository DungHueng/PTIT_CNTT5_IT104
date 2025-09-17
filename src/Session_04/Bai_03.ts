type A = {Name: string};
type B = {Age: number};
type C = {Email: string};
type D = A & B & C;

const student: D = {Name: "Nguyễn Văn A", Age: 20, Email: "NguyenA@gmail.com"};
console.log(`Tên tôi là ${student.Name}, tôi ${student.Age} tuổi và email của tôi là ${student.Email}.`);