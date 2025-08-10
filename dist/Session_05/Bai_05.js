class Rectangle {
    width;
    height;
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    setWidth(w) {
        this.width = w;
    }
    setHeight(h) {
        this.height = h;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect1 = new Rectangle(5, 5);
const rect2 = new Rectangle(10, 20);
console.log(`Diện tích hình chữ nhật: ${rect1.getArea()}`);
console.log(`Chu vi hình chữ nhật: ${rect2.getPerimeter()}`);
const updatedRect = new Rectangle(5, 6);
updatedRect.setWidth(9);
updatedRect.setHeight(4);
console.log(`Diện tích hình chữ nhật sau khi cập nhật: ${updatedRect.getArea()}`);
console.log(`Chu vi hình chữ nhật sau khi cập nhật: ${updatedRect.getPerimeter()}`);
export {};
//# sourceMappingURL=Bai_05.js.map