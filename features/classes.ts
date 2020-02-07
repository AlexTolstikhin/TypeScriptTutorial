class Vehicle {
    constructor(public color: string, public year: number) {}
    protected honk(): void {
        console.log('Beep');
    }
}

const vehicle = new Vehicle('yellow', 1994);
console.log(vehicle.color);
console.log(vehicle.year);
class Car extends Vehicle {
    constructor(public wheels: number, color: string, year: number) {
        super(color, year);
    }
    private drive(): void {
        console.log('vroom');
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const carNew = new Car(3, 'yellow', 1233);
