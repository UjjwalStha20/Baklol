void main() {
  Car my_car = Car("Toyata", "carmy", 2020, 4);
  Bike my_bike = Bike('Harley', "Davidson", 2019, true);
  Truck my_truck = Truck('ford', "F150", 2021, 2000);

  Garage garage = Garage();
  garage.add_vehicle(my_car);
  garage.add_vehicle(my_bike);
  garage.add_vehicle(my_truck);

  garage.list_vehicles();
  garage.remove_vehicle(my_truck);

  garage.vehicles?.forEach((vehicle) => vehicle.drive());
}

abstract class Vehicle {
  String make, model;
  int year;
  Vehicle(this.make, this.model, this.year);
  void start_enginee() {
    print("Engine started");
  }

  void stop_engine() {
    print("Engine stopped");
  }

  void drive() {
    print("Vechicle is driving");
  }
}

class Car extends Vehicle {
  int num_doors;
  Car(String make, String model, int year, this.num_doors)
    : super(make, model, year);

  void drive() {
    print("Driving the car on the road.");
  }
}

class Bike extends Vehicle {
  bool has_sidecar;
  Bike(String make, String model, int year, this.has_sidecar)
    : super(make, model, year);

  void start_engine() {
    print("Kick-starting the engine");
  }

  void drive() {
    print("Riding the bike");
  }
}

class Truck extends Vehicle {
  int cargo_capacity;
  Truck(String make, String model, int year, this.cargo_capacity)
    : super(make, model, year);

  void drive() {
    print("Driving the truck");
  }
}

class Garage {
  List? vehicles = [];

  void add_vehicle(vehicle) {
    vehicles?.add(vehicle);
  }

  void remove_vehicle(vehicle) {
    vehicles?.remove(vehicle);
    print("${vehicle.make} has been removed.");
  }

  void list_vehicles() {
    print("List of Vehicles in Garage");
    vehicles?.forEach(
      (vehicle) => print(
        "${vehicle.make} ${vehicle.model} (${vehicle.year}) [${vehicle.runtimeType.toString()}]",
      ),
    );
  }

  void start_all_engines() {
    vehicles?.forEach((vehicle) => vehicle.start_engine());
  }
}
