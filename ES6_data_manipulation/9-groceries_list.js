function groceriesList() {
    // Create a new Map
    const groceries = new Map();

    // Add items to the Map
    groceries.set('Apples', 10);
    groceries.set('Tomatoes', 10);
    groceries.set('Pasta', 1);
    groceries.set('Rice', 1);
    groceries.set('Banana', 5);

    // Return the Map object
    return groceries;
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default groceriesList;
