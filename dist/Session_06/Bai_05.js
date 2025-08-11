class vehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        console.log(`Tăng tốc: Tốc độ hiện tại là ${this.speed} km/h`);
    }
    slowDown() {
        this.speed -= 10;
        if (this.speed < 0)
            this.speed = 0;
        console.log(`Giảm tốc: Tốc độ hiện tại là ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dừng lại: Tốc độ hiện tại là ${this.speed} km/h`);
    }
}
const Vehicle = new vehicle(30);
Vehicle.speedUp();
Vehicle.slowDown();
Vehicle.stop();
export {};
//# sourceMappingURL=Bai_05.js.map