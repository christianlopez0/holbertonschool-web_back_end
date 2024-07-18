// 8-getBudgetCurrentYear.js

function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    const currentYear = getCurrentYear(); // Store the current year in a variable
  
    // Use computed property names for dynamic object keys
    const budget = {
      [`income-${currentYear}`]: income,
      [`gdp-${currentYear}`]: gdp,
      [`capita-${currentYear}`]: capita
    };
  
    return budget;
  }
  