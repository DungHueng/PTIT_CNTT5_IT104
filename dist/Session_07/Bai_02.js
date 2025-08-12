class vehice {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp() {
        this.speed += 10;
        console.log(`Speed up: Tốc độ hiện tại là ${this.speed} km/h`);
    }
    slowDown() {
        this.speed -= 10;
        if (this.speed < 0)
            this.speed = 0;
        console.log(`Slow down: Tốc độ hiện tại là ${this.speed} km/h`);
    }
    showSpeed() {
        console.log(`${this.speed} km/h`);
    }
    showInfo() {
        console.log(`Tên ${this.name}, Tốc độ ${this.speed} km/h, ID ${this.id}`);
    }
}
class bicycle extends vehice {
    gear;
    constructor(name, id, speed, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`${super.showInfo()} - gear: ${this.gear}`);
    }
}
const Bike = new bicycle("Toyota", 1, 10, 8);
Bike.showInfo();
Bike.speedUp();
Bike.slowDown();
Bike.showSpeed();
export {};
//# sourceMappingURL=Bai_02.js.map