var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name1 = name;
    }
    Animal.prototype.sound = function () {
        console.log("".concat(this.name1, " make sound."));
    };
    Animal.prototype.live = function () {
        console.log("".concat(this.name1, " lives in the forest"));
    };
    return Animal;
}());
// class WildAnimal extends Animal{
// }
var lion = new Animal('lion');
lion.sound();
// const elephant = new WildAnimal('elephant');
// elephant.sound()
