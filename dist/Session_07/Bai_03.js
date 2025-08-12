class animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Con này là ${this.name}`);
    }
}
class cat extends animal {
    makeNoise() {
        console.log("Meo Meo");
    }
}
class dog extends animal {
    makeNoise() {
        console.log("Gâu Gâu");
    }
}
const Cat = new cat("con mèo: ");
Cat.printName();
Cat.makeNoise();
const Dog = new dog("con chó: ");
Dog.printName();
Dog.makeNoise();
export {};
//# sourceMappingURL=Bai_03.js.map