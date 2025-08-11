class job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class partTimeJob extends job {
    workingHours;
    constructor(type, workingHours) {
        super(type);
        this.workingHours = workingHours;
    }
    caculateSalary() {
        const salary = this.workingHours * 30000;
        console.log(`Lương cho công việc bán thời gian: ${salary} VND`);
    }
}
class fullTimeJob extends job {
    Salary;
    constructor(type, Salary) {
        super(type);
        this.Salary = Salary;
    }
    caculateSalary() {
        console.log(`Lương cho công việc toàn thời gian: ${this.Salary} VND`);
    }
}
const partTime = new partTimeJob("Bán thời gian", 4);
partTime.printType();
partTime.caculateSalary();
const fullTime = new fullTimeJob("Toàn thời gian", 10000000);
fullTime.printType();
fullTime.caculateSalary();
export {};
//# sourceMappingURL=Bai_02.js.map