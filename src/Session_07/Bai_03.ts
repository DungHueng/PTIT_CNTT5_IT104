abstract class animal {
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract makeNoise(): void;

    printName(): void{
        console.log(`Con này là ${this.name}`);
    }
}

class cat extends animal {
    makeNoise(): void {
        console.log("Meo Meo");
    }
}

class dog extends animal {
    makeNoise(): void {
        console.log("Gâu Gâu");
    }
}

const Cat = new cat("con mèo: ");
Cat.printName();
Cat.makeNoise();
const Dog = new dog("con chó: ");
Dog.printName();
Dog.makeNoise();