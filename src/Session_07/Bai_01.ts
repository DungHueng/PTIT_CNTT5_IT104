class employee {
    private name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(){
        console.log(`${this.name} - ${this.company} - ${this.phone}`);
        
    }
}

class manager extends employee {
    teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name, company, phone)
        this.teamSize = teamSize;
    }
    printInfo(){
        console.log(`${this.teamSize}`);
    }
}
const employeed = new employee("Jack", "Fly", "123456789");
employeed.printInfo();
const sizeTeam = new manager("Son Tung","Sky","01111111122",8);
sizeTeam.printInfo();
