// 12-createReportObject.js

export default function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList  // Spread the departments and their employees
      },
      getNumberOfDepartments() {
        return Object.keys(this.allEmployees).length;  // Get the number of keys in allEmployees
      }
    };
  }
  