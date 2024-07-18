// 2-arrow.js

export default class getNeighborhoodsList {
    constructor() {
      this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    }
  
    // Arrow function for addNeighborhood to ensure `this` context is maintained
    addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }
  