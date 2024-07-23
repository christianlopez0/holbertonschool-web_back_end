function getListStudents() {
    // Array to hold student objects
    const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    // Return the array of student objects
    return students;
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default getListStudents;
