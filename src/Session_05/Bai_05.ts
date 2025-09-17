class Rectangle {
  private width: number;
  private height: number;
  constructor(w: number, h: number) {
    this.width = w;
    this.height = h;
  }
  setWidth(w: number) {
    this.width = w;
  }
  setHeight(h: number) {
    this.height = h;
  }

  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
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
console.log(
  `Diện tích hình chữ nhật sau khi cập nhật: ${updatedRect.getArea()}`
);
console.log(
  `Chu vi hình chữ nhật sau khi cập nhật: ${updatedRect.getPerimeter()}`
);
