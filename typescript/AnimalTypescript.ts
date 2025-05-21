
class Animal{
    
    protected name : string;

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

class WildAnimal extends Animal{

    public constructor(name: string){
        super(name);
    }

    public live(){
        
        console.log(`${this.name} live in forest.`)
    }
    
}
class DOmesticAnimal extends Animal{

    public constructor(name: string){
        super(name);
    }

    public live(){
        
        console.log(`${this.name} live in home.`)
    }
    
}
const lion = new Animal('lion');
lion.sound()
lion.live()


const elephant = new WildAnimal('elephant');
elephant.sound()
elephant.live()


const goat = new WildAnimal('goat');
goat.sound()
goat.live()