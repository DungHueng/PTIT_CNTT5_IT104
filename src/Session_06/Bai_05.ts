interface changeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class vehicle implements changeSpeed {
    private speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    speedUp(): void {
        this.speed += 10;
        console.log(`Tăng tốc: Tốc độ hiện tại là ${this.speed} km/h`);
    }
    slowDown(): void {
        this.speed -= 10;
        if (this.speed < 0) this.speed = 0;
        console.log(`Giảm tốc: Tốc độ hiện tại là ${this.speed} km/h`);
    }
    stop(): void {
        this.speed = 0;
        console.log(`Dừng lại: Tốc độ hiện tại là ${this.speed} km/h`);
    }
}

const Vehicle = new vehicle(30);
Vehicle.speedUp();
Vehicle.slowDown();
Vehicle.stop();