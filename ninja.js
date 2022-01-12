class Ninja{
    constructor(name,health = 15, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName(){
        console.log(`My name is ${this.name}`)
        return this;
    }
    
    showStats(){
        console.log(`My name is ${this.name} , my stats are health ${this.health} , speed ${this.speed} , strength ${this.strength} .`)
        return this;
    }

    drinkSake(){
        this.health += 10
        console.log(`Health increased to ${this.health}`)
        return this;
    }

}

// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10 , 10)
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake();
        console.log(`${this.name} says. What one programmer can do in one month, two programmers can do in two months.`)
    }
}

const ninja1 = new Ninja("Hyabusa");
console.log(ninja1)
ninja1.sayName().showStats().drinkSake();


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"