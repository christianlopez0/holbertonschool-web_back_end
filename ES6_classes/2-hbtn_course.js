export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = ''; // Default value
      this._length = 0; // Default value
      this._students = []; // Default value
      
      // Validate and set name
      if (typeof name === 'string') {
        this._name = name;
      } else {
        throw new TypeError('Name must be a string');
      }
  
      // Validate and set length
      if (typeof length === 'number') {
        this._length = length;
      } else {
        throw new TypeError('Length must be a number');
      }
  
      // Validate and set students
      if (Array.isArray(students) && students.every(student => typeof student === 'string')) {
        this._students = students;
      } else {
        throw new TypeError('Students must be an array of strings');
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
  
    // Getter and setter for length
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      if (typeof newLength === 'number') {
        this._length = newLength;
      } else {
        throw new TypeError('Length must be a number');
      }
    }
  
    // Getter and setter for students
    get students() {
      return this._students;
    }
  
    set students(newStudents) {
      if (Array.isArray(newStudents) && newStudents.every(student => typeof student === 'string')) {
        this._students = newStudents;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }
  