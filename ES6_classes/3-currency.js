export default class Currency {
    constructor(code, name) {
      this._code = ''; // Default value
      this._name = ''; // Default value
      
      // Validate and set code
      if (typeof code === 'string') {
        this._code = code;
      } else {
        throw new TypeError('Code must be a string');
      }
  
      // Validate and set name
      if (typeof name === 'string') {
        this._name = name;
      } else {
        throw new TypeError('Name must be a string');
      }
    }
  
    // Getter and setter for code
    get code() {
      return this._code;
    }
  
    set code(newCode) {
      if (typeof newCode === 'string') {
        this._code = newCode;
      } else {
        throw new TypeError('Code must be a string');
      }
    }
  
    // Getter and setter for name
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        throw new TypeError('Name must be a string');
      }
    }
  
    // Method to display full currency format
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
  