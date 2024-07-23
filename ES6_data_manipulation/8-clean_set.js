function cleanSet(set, startString) {
    let result = '';

    // Iterate over each value in the set
    set.forEach(value => {
        // Check if the value starts with startString
        if (value.startsWith(startString)) {
            // Append the substring after startString to the result string
            result += (result.length === 0 ? '' : '-') + value.substring(startString.length);
        }
    });

    return result;
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default cleanSet;
