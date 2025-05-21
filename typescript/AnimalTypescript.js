var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sound = function () {
        console.log("".concat(this.name, " make sound."));
    };
    Animal.prototype.live = function () {
        console.log("".concat(this.name, " lives in the forest"));
    };
    return Animal;
}());
var WildAnimal = /** @class */ (function (_super) {
    __extends(WildAnimal, _super);
    function WildAnimal(name) {
        return _super.call(this, name) || this;
    }
    WildAnimal.prototype.live = function () {
        console.log("".concat(this.name, " live in forest."));
    };
    return WildAnimal;
}(Animal));
var DOmesticAnimal = /** @class */ (function (_super) {
    __extends(DOmesticAnimal, _super);
    function DOmesticAnimal(name) {
        return _super.call(this, name) || this;
    }
    DOmesticAnimal.prototype.live = function () {
        console.log("".concat(this.name, " live in home."));
    };
    return DOmesticAnimal;
}(Animal));
var lion = new Animal('lion');
lion.sound();
lion.live();
var elephant = new WildAnimal('elephant');
elephant.sound();
elephant.live();
var goat = new WildAnimal('goat');
goat.sound();
goat.live();
