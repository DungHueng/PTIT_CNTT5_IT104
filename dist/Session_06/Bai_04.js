class circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle1 = new circle(5);
console.log(`Diện tích hình tròn: ${circle1.calculateArea()}`);
console.log(`Chu vi hình tròn: ${circle1.calculatePerimeter()}`);
const rectangle1 = new rectangle(3, 2);
console.log(`Diện tích hình chữ nhật: ${rectangle1.calculateArea()}`);
console.log(`Chu vi hình chữ nhật: ${rectangle1.calculatePerimeter()}`);
export {};
//# sourceMappingURL=Bai_04.js.map