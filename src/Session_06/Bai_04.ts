interface geometry {
  calculateArea(): number;
  calculatePerimeter(): number;
}

class circle implements geometry {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class rectangle implements geometry {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle1 = new circle(5);
console.log(`Diện tích hình tròn: ${circle1.calculateArea()}`);
console.log(`Chu vi hình tròn: ${circle1.calculatePerimeter()}`);

const rectangle1 = new rectangle(3, 2);
console.log(`Diện tích hình chữ nhật: ${rectangle1.calculateArea()}`);
console.log(`Chu vi hình chữ nhật: ${rectangle1.calculatePerimeter()}`);
