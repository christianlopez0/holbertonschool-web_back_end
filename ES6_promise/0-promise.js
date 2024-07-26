function getResponseFromAPI() {
    // Create and return a new Promise
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation with a timeout
      setTimeout(() => {
        // Resolve the promise with a mock response
        resolve("Response from API");
      }, 1000); // 1-second delay for example
    });
  }
  
  export default getResponseFromAPI;
  