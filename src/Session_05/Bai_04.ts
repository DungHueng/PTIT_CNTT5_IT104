class vehice {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;
    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(`Tên: ${this.name}, Năm sản xuất: ${this.year}, Công ty: ${this.company}, ID: ${this.id}`);
    }
}
const Vehicle1 = new vehice('Toyota Camry', 2020, 'Toyota', 1);
const Vehicle2 = new vehice('Honda Accord', 2021, 'Honda', 2);
Vehicle1.printInfo();
Vehicle2.printInfo();