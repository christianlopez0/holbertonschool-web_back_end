function updateUniqueItems(map) {
    // Check if the argument is a Map
    if (!(map instanceof Map)) {
        throw new Error("Cannot process");
    }

    // Iterate through each entry in the Map
    map.forEach((value, key) => {
        // Check if the quantity is 1
        if (value === 1) {
            // Update the quantity to 100
            map.set(key, 100);
        }
    });
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default updateUniqueItems;
