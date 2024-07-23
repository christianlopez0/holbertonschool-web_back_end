function createInt8TypedArray(length, position, value) {
    // Check if position is within bounds
    if (position < 0 || position >= length) {
        throw new Error("Position outside range");
    }

    // Create an ArrayBuffer of specified length
    const buffer = new ArrayBuffer(length);

    // Create an Int8Array view on the ArrayBuffer
    const int8View = new Int8Array(buffer);

    // Set the value at the specified position
    int8View.set([value], position);

    // Return a DataView object to inspect the buffer
    return new DataView(buffer);
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default createInt8TypedArray;
