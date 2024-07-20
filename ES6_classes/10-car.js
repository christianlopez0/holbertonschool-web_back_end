// File: 10-car.js

// Symbol used as a private property key for cloning
const _clone = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    
    // Define the clone method using Symbol
    this[_clone] = () => {
      // Create a new instance of the current class and pass in current attributes
      return new this.constructor(this._brand, this._motor, this._color);
    };
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    // Call the private clone method using the symbol
    return this[_clone]();
  }
}
