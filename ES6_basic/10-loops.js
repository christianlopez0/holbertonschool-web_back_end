// 10-loops.js

export default function appendToEachArrayValue(array, appendString) {
    // Create a new array to store the modified values
    const result = [];
  
    // Use for...of to iterate over each element in the array
    for (const value of array) {
      result.push(appendString + value); // Append the string to each value and push to the result array
    }
  
    return result;
  }
  