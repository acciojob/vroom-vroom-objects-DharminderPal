// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding the getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to initialize make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding the getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage:
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getMakeModel()); // Output: "Toyota Corolla"

const mySportsCar = new SportsCar('Ferrari', '488', 211);
console.log(mySportsCar.getMakeModel()); // Output: "Ferrari 488"
console.log(mySportsCar.getTopSpeed()); // Output: 211