function handleResponseFromAPI(promise) {
    // Add handlers to the promise
    return promise
      .then(response => {
        // Log the response message when the promise resolves
        console.log('Got a response from the API');
        // Return an object with the desired attributes
        return {
          status: 200,
          body: 'success'
        };
      })
      .catch(error => {
        // Log the response message when the promise rejects
        console.log('Got a response from the API');
        // Return an empty Error object
        return new Error();
      });
  }
  
  export default handleResponseFromAPI;
  