
class Animal{
    
    private name1 : string;

    public constructor(name : string){
        this.name1 = name;
    }
    public sound(): void {
        console.log(`${this.name1} make sound.`);
        
    }
    public live(){
        console.log(`${this.name1} lives in the forest`)
    }
}

// class WildAnimal extends Animal{

// }

const lion = new Animal('lion');
lion.sound()


// const elephant = new WildAnimal('elephant');
// elephant.sound()