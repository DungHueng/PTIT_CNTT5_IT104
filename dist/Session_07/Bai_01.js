class employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`${this.name} - ${this.company} - ${this.phone}`);
    }
}
class manager extends employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`${this.teamSize}`);
    }
}
const employeed = new employee("Jack", "Fly", "123456789");
employeed.printInfo();
const sizeTeam = new manager("Son Tung", "Sky", "01111111122", 8);
sizeTeam.printInfo();
export {};
//# sourceMappingURL=Bai_01.js.map