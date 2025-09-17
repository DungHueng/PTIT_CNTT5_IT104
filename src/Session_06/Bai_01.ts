abstract class shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getSize(): void;

  getName(): void {
    console.log(`Tên của hình là: ${this.name}`);
  }
}

class retangle extends shape {
  protected width: number;
  protected height: number;
  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getSize(): void {
    console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
  }
}

const total = new retangle("Hình chữ nhật", 5, 10);
total.getName();
total.getSize();