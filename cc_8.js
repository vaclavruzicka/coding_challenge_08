//Task 1 - Function Declaration

//Writing a function that calculates a net salary given a base salary, bonus, and tax rate.
function calculateSalary(baseSalary, bonus, taxRate){
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate) //Adding the base salary and bonus, while subtracting taxes.
    return netSalary //Returns the net salary.
};
//Logging the function with provided data using a template literal.
//Used .toFixed(2) to round the output to two decimal places.
console.log(`Net Salary: $${calculateSalary(5000,500,0.1).toFixed(2)}`); //Expected Output: "Net Salary: $5000.00"
console.log(`Net Salary: $${calculateSalary(7000,1000,0.15).toFixed(2)}`); //Expected Output: "Net Salary: $6950.00"