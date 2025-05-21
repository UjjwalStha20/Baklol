
class Animal{
    name : string;

    public constructor(name : string){
        this.name = name;
    }
    public sound(): void {
        console.log(`${this.name} make sound.`);
        
    }
    public live(){
        console.log(`${this.name} lives in the forest`)
    }
}

// class WildAnimal extends Animal{

// }

const lion = new Animal('lion');
lion.sound()


// const elephant = new WildAnimal('elephant');
// elephant.sound()