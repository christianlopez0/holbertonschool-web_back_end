export default class Building {
    constructor(sqft) {
      if (this.constructor === Building) {
        throw new Error('Abstract classes cannot be instantiated');
      }
      this._sqft = sqft;
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method: must be overridden by subclasses
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  