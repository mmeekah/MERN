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

class Sensei extends Ninja{
    constructor (name){
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.health =200;
        this.wisdom =10;
    }

    speakWisdom(){
        this.health +=10;
        console.log("What one programmer can do in one month, two programmers can do in two months.");

    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();