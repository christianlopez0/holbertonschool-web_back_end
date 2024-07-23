function hasValuesFromArray(set, array) {
    // Use every to check if all elements in the array exist in the set
    return array.every(element => set.has(element));
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default hasValuesFromArray;
