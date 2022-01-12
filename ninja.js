class Ninja{
    constructor(name,health = 15){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
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


const ninja1 = new Ninja("Hyabusa");
console.log(ninja1)
ninja1.sayName().showStats().drinkSake();