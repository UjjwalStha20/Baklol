class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} makes different sound`);
    }

    legs() {
        console.log(`${this.name} have four legs.`);
    }
}

class WildAnimal extends Animal {
      live() {
        console.log(`${this.name} lives in Forest.`);
    }
}

class DomesticAnimal extends Animal {
      live() {
        console.log(`${this.name} lives in Home.`);
    }
}

const animal = new Animal("Dog");
animal.legs();
animal.sound();

const animal1 = new WildAnimal("Tiger")
animal1.live()
animal1.legs()
animal1.sound()    

const animal2 = new DomesticAnimal("Cat")
animal2.live()
animal2.legs()
