function updateStudentGradeByCity(students, city, newGrades) {
    // Filter students by the specified city
    const filteredStudents = students.filter(student => student.location === city);
    
    // Map over the filtered students to update grades
    const updatedStudents = filteredStudents.map(student => {
        // Try to find a corresponding grade in newGrades
        const matchedGrade = newGrades.find(grade => grade.studentId === student.id);
        
        // If a matching grade is found, assign it; otherwise, assign 'N/A'
        const grade = matchedGrade ? matchedGrade.grade : 'N/A';
        
        // Return a new object with student details and updated grade
        return {
            id: student.id,
            firstName: student.firstName,
            location: student.location,
            grade: grade
        };
    });
    
    // Return the array of updated students
    return updatedStudents;
}

// Export the function to be used elsewhere if needed (e.g., in another file/module)
export default updateStudentGradeByCity;
