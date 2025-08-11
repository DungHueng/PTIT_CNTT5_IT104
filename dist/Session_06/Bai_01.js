class shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(`Tên của hình là: ${this.name}`);
    }
}
class retangle extends shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}
const total = new retangle("Hình chữ nhật", 5, 10);
total.getName();
total.getSize();
export {};
//# sourceMappingURL=Bai_01.js.map