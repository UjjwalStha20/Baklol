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
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.start_engine = function () {
        console.log("Engine started.");
    };
    Vehicle.prototype.stop_engine = function () {
        console.log("Engine stopped.");
    };
    Vehicle.prototype.drive = function () {
        console.log("Driving a vehicle.");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, num_doors) {
        var _this = _super.call(this, make, model, year) || this;
        _this.num_doors = num_doors;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log("Driving the car ");
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(make, model, year, has_sidebar) {
        var _this = _super.call(this, make, model, year) || this;
        _this.has_sidebar = has_sidebar;
        return _this;
    }
    Bike.prototype.start_engine = function () {
        console.log("Start-kicking the enginee ");
    };
    Bike.prototype.drive = function () {
        console.log("Riding the bike ");
    };
    return Bike;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, cargo_capacity) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cargo_capacity = cargo_capacity;
        return _this;
    }
    Truck.prototype.drive = function () {
        console.log("Driving the truck ");
    };
    return Truck;
}(Vehicle));
var Garage = /** @class */ (function () {
    function Garage() {
        this.vehicles = [];
    }
    Garage.prototype.add_vehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    Garage.prototype.remove_vehicle = function (vehicle) {
        var index = this.vehicles.indexOf(vehicle);
        if (index != -1) {
            this.vehicles.slice(index, 1);
        }
    };
    Garage.prototype.list_all_vehicles = function () {
        console.log("List of Vehicles in Garage:");
        this.vehicles.forEach(function (vehicle) {
            var vechileType = vehicle.constructor.name;
            console.log("".concat(vehicle.make, " ").concat(vehicle.model, " (").concat(vehicle.year, ") ").concat(vechileType));
        });
    };
    Garage.prototype.start_all_engine = function () {
        this.vehicles.forEach(function (vehicle) {
            vehicle.start_engine();
        });
    };
    return Garage;
}());
var myCar = new Car("Toyota", "Camry", 2020, 4);
var myBike = new Bike("Harley", "Davidson", 2019, true);
var myTruck = new Truck("Ford", "F-150", 2021, 2000);
var garage = new Garage();
garage.add_vehicle(myCar);
garage.add_vehicle(myBike);
garage.add_vehicle(myTruck);
garage.list_all_vehicles();
garage.start_all_engine();
garage.vehicles.forEach(function (vehicle) {
    vehicle.drive();
});
