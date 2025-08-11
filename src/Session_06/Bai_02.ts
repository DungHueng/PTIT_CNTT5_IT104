abstract class job {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  abstract caculateSalary(): void;

  printType(): void {
    console.log(`Loại công việc: ${this.type}`);
  }
}

class partTimeJob extends job {
  private workingHours: number;
  constructor(type: string, workingHours: number) {
    super(type);
    this.workingHours = workingHours;
  }
  caculateSalary(): void {
    const salary = this.workingHours * 30000;
    console.log(`Lương cho công việc bán thời gian: ${salary} VND`);
  }
}

class fullTimeJob extends job {
  private Salary: number;
  constructor(type: string, Salary: number) {
    super(type);
    this.Salary = Salary;
  }
  caculateSalary(): void {
    console.log(`Lương cho công việc toàn thời gian: ${this.Salary} VND`);
  }
}

const partTime = new partTimeJob("Bán thời gian", 4);
partTime.printType();
partTime.caculateSalary();
const fullTime = new fullTimeJob("Toàn thời gian", 10000000);
fullTime.printType();
fullTime.caculateSalary();
