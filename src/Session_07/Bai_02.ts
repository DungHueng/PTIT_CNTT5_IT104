class vehice {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp(): void{
        this.speed += 10;
        console.log(`Speed up: Tốc độ hiện tại là ${this.speed} km/h`);
    }
    slowDown(): void{
        this.speed -= 10;
        if (this.speed < 0) this.speed = 0;
        console.log(`Slow down: Tốc độ hiện tại là ${this.speed} km/h`);
    }
    showSpeed(): void{
        console.log(`${this.speed} km/h`);
    }
    showInfo(): void{
        console.log(`Tên ${this.name}, Tốc độ ${this.speed} km/h, ID ${this.id}`);
    }
}

class bicycle extends vehice {
    private gear: number;
    constructor(name: string, id: number, speed: number, gear: number){
        super(name, speed, id)
        this.gear = gear;
    }
    showInfo(){
        console.log(`${super.showInfo()} - gear: ${this.gear}`);
    }
}
const Bike = new bicycle("Toyota", 1, 10, 8);
Bike.showInfo();
Bike.speedUp();
Bike.slowDown();
Bike.showSpeed();