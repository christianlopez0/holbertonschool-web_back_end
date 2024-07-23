function getListStudentIds(students) {
    // Check if input is an array
    if (!Array.isArray(students)) {
        return []; // Return an empty array if not an array
    }

    // Use map to extract ids and return as a new array
    return students.map(student => student.id);
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default getListStudentIds;
