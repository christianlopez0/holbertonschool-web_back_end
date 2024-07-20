export default class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Getter for size
    get size() {
      return this._size;
    }
  
    // Getter for location
    get location() {
      return this._location;
    }
  
    // Casting to Number returns size
    valueOf() {
      return this._size;
    }
  
    // Casting to String returns location
    toString() {
      return this._location;
    }
  }
  