class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Tên: ${this.name}, Công ty: ${this.company}, Số điện thoại: ${this.phone}`);
    }
}
const Employee1 = new Employee("Nguyen Van A", "Rikkei", 912345678);
const Employee2 = new Employee("Nguyen Van B", "Capsule Corp", 987654321);
Employee1.printInfo();
Employee2.printInfo();
export {};
//# sourceMappingURL=Bai_03.js.map