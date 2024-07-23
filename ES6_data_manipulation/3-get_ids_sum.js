function getStudentIdsSum(students) {
    // Use reduce to sum up all student ids
    return students.reduce((sum, student) => sum + student.id, 0);
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default getStudentIdsSum;
