function getStudentsByLocation(students, city) {
    // Use filter to find students in the specified city
    return students.filter(student => student.location === city);
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default getStudentsByLocation;
