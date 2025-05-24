class Animal {
  String name = "";

  Animal(String name) {
    this.name = name;
  }
  void sound() {
    print("${name} make sound.");
  }

  void live() {
    print("${name} live in the earth.");
  }
}

class WildAnimal extends Animal {
  WildAnimal(String name) : super('');

  void live() {
    print("${name} lives in forest.");
  }
}

class DomesticAnimal extends Animal {

  DomesticAnimal(String name) : super('');
  
  void live() {
    print("${name} lives in home.");
  }
}

void main() {
  Animal tiger = Animal('tiger');
  tiger.sound();
  tiger.live();

  WildAnimal deer = WildAnimal('deer');
  deer.live();
  deer.sound();

  DomesticAnimal hen = DomesticAnimal('hen');
  hen.sound();
  hen.live();
}
