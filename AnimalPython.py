class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        print(f"{self.name} make different sound.")

    def live(self):
        print(f"{self.name} live in earth.")

class WildAnimal(Animal):

    def __init__(self, name):
        super().__init__(name)


    def live(self):
        print(f"{self.name} live in forest.")


class DomesticAnimal(Animal):
    def __init__(self, name):
        super().__init__(name)
    
    def live(self):
        print(f"{self.name} live in home.")


dog = Animal('dog')
dog.live()
dog.sound()

tiger = WildAnimal('tiger')
tiger.live()
tiger.sound()

cow = DomesticAnimal('cow')
cow.live()
cow.sound()

