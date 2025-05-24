abstract class  Vehicle{
    public make: string;
    public model: string;
    public year: number;


    public constructor( make : string,model : string ,year : number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public start_engine(){
        console.log("Engine started.");
    }
    public stop_engine(){
        console.log("Engine stopped.");
    }
    public drive(){
        console.log("Driving a vehicle.");
    }
}
class Car extends Vehicle{
    protected num_doors : number;
    constructor(make : string, model: string,year: number, num_doors : number){
        super(make,model,year)
        this.num_doors = num_doors;
    }
    public drive(){
        console.log("Driving the car ");
    
    }
}

class Bike extends Vehicle{
    protected has_sidebar : boolean;
    constructor(make : string, model: string,year: number, has_sidebar : boolean){
        super(make,model,year)
        this.has_sidebar = has_sidebar;
    }
    public start_engine(){
        console.log("Start-kicking the enginee ");
    }
    public drive(){
            console.log("Riding the bike ");
        }

}
class Truck extends Vehicle{
    protected cargo_capacity : number;
    constructor(make : string, model: string,year: number, cargo_capacity : number){
        super(make,model,year)
        this.cargo_capacity = cargo_capacity;
    }
    public drive(){
            console.log("Driving the truck ");
        }

}

class Garage{
    public vehicles: Vehicle[] = [];

    public add_vehicle(vehicle : Vehicle){
        this.vehicles.push(vehicle);
    }

    public remove_vehicle(vehicle : Vehicle){

        const index = this.vehicles.indexOf(vehicle);
        if( index != -1){
            this.vehicles.slice(index,1);
        }
    }

    public list_all_vehicles(){
        console.log("List of Vehicles in Garage:");
        this.vehicles.forEach(vehicle => {
            const vechileType = (vehicle.constructor as any).name;
            console.log(`${vehicle.make} ${vehicle.model} (${vehicle.year}) ${vechileType}`)
            
        });
    }

    public start_all_engine(){
        this.vehicles.forEach( vehicle => {
            vehicle.start_engine()
        });
    }
}


const myCar = new Car("Toyota", "Camry", 2020, 4);
const myBike = new Bike("Harley", "Davidson", 2019, true);
const myTruck = new Truck("Ford", "F-150", 2021, 2000);

const garage = new Garage();
garage.add_vehicle(myCar);
garage.add_vehicle(myBike);
garage.add_vehicle(myTruck);

garage.list_all_vehicles();
garage.start_all_engine();

garage.vehicles.forEach(vehicle => {
   vehicle.drive() 
});
