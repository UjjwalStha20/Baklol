from abc import ABC


class Vehicle(ABC):
    def __init__(self,make,model,year):
        self.make = make
        self.model = model
        self.year = year
    
    def start_engine(self):
        print('Engine started')

    def stop_engine(self):
        print("Engine stopped")

    def drive(self):
        pass


class Car(Vehicle):
    def __init__(self, make, model, year, num_doors):
        super().__init__(make, model, year)
        self.num_doors = num_doors

    def drive(self):
        print("Driving the car on road.")

class Bike(Vehicle):    
    def __init__(self, make, model, year, has_sidecar):
        super().__init__(make, model, year)
        self.has_sidecar = has_sidecar

    def start_engine(self):
        print("Kick-starting the engine")

    def drive(self):
        print("Riding the bike")

class Truck(Vehicle):
    def __init__(self, make, model, year,cargo_capacity):
        super().__init__(make, model, year)
        self.cargo_capacity = cargo_capacity

    def drive(self):
        print("Driving the truck")




class Garage:

    def __init__(self):
        self.vehicles =[]
    
    def add_vehicle(self,vehicle):
        self.vehicles.append(vehicle)

    def remove_vehicle(self, vehicle):
        if vehicle in self.vehicles:
            self.vehicles.remove(vehicle)

    def list_vehicles(self):
        print('Garage Vehicles :')
        for vehicle in self.vehicles:
            vehicle_type = type(vehicle).__name__
            print(f'{vehicle.make} {vehicle.model} ({vehicle.year}) [{vehicle_type}]')
        
    def start_all_engines(self):
        for vehicle in self.vehicles:
            vehicle.start_engine()

# Create vehicles
my_car = Car("Toyota", "Camry", 2020, 4)
my_bike = Bike("Harley", "Davidson", 2019, True)
my_truck = Truck("Ford", "F-150", 2021, 2000)

# Create garage
garage = Garage()
garage.add_vehicle(my_car)
garage.add_vehicle(my_bike)
garage.add_vehicle(my_truck)

# Test functionality
garage.list_vehicles()
garage.start_all_engines()

# Test driving
for vehicle in garage.vehicles:
    vehicle.drive()