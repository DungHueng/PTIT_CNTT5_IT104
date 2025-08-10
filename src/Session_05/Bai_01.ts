class vehice {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    speak(){
        console.log(`Đây là xe ${this.name} của hãng ${this.company} và được sản xuất năm ${this.year}`);
    }
}
const car = new vehice('Civic', 2020, 'Honda');
const bike = new vehice('CBR', 2021, 'Honda');
car.speak();
bike.speak();