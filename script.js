// // Complete the js code
// function Car(make, model) {}

// function SportsCar(make, model, topSpeed) {}

// // Do not change the code below
// window.Car = Car;
// window.SportsCar = SportsCar;


function car(make, model){
this.make=make;
this.model=model;
}

car.prototype.getmakemodel=function(){
    return `${this.make}  ${this.model}`;
}


// Define the SportsCar Constructor
function SportsCar(make,model,topspeed){
    car.call(this,make,model);
    this.topspeed=topspeed;
}
// Set Up Inheritance
SportsCar.prototype =Object.create(car.prototype);
SportsCar.prototype.constructor = SportsCar;




SportsCar.prototype.gettopspeed =function(){
    return this.topspeed;
}