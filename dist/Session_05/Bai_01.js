class vehice {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    speak() {
        console.log(`Đây là xe ${this.name} của hãng ${this.company} và được sản xuất năm ${this.year}`);
    }
}
const car = new vehice('Civic', 2020, 'Honda');
const bike = new vehice('CBR', 2021, 'Honda');
car.speak();
bike.speak();
export {};
//# sourceMappingURL=Bai_01.js.map