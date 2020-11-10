// class Vehicle {
//     constructor(manufacturer, model, color) {
//         this.miles = 0;
//         this.manufacturer =manufacturer;
//         this.model = model;
//         this.color = color;
//     }

//     drive(){
//         this.miles +=10;

//     }
// }


// const car = new Vehicle("MB", "S", "blue");
// car.drive();
// console.log(car.miles);

class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed= 3;
        this.strength = 3;

    }

    sayName(){
        console.log(`I'm ninja ${this.name}!`);
        
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);

    }

    drinkSake(){
        this.health +=10;
        return this;
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();