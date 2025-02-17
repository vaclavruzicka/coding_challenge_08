//Task 1 - Function Declaration

//Writing a function that calculates a net salary given a base salary, bonus, and tax rate.
function calculateSalary(baseSalary, bonus, taxRate){
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //Adding the base salary and bonus, while subtracting taxes.
    return netSalary; //Returns the net salary.
};
//Logging the function with provided data using a template literal.
//Used .toFixed(2) to round the output to two decimal places.
console.log(`Net Salary: $${calculateSalary(5000,500,0.1).toFixed(2)}`); //Expected Output: "Net Salary: $5000.00"
console.log(`Net Salary: $${calculateSalary(7000,1000,0.15).toFixed(2)}`); //Expected Output: "Net Salary: $6950.00"

//Task 2 - Function Expression

//Writing a function that calculates a discounted price given the discount rate and the base price.
function calculateDiscount(price, discountRate){
    let finalPrice = price - (price * discountRate); //Subtracting the discount amount from the price.
    return finalPrice; //Returning the final price.
};

//Logging the data with proivded data using a template literal.
//Used .toFixed(2) to round the output to two decimal places.
console.log(`Final Price: $${calculateDiscount(100, 0.2).toFixed(2)}`); //Expected Output: "Final Price: $80.00"
console.log(`Final Price: $${calculateDiscount(250, 0.15).toFixed(2)}`) //Expected Output: "Final Price: $212.50"

//Task 3 - Arrow Function

//Writing a function that calculates a service fee given an amount and a type of service.
const calculateServiceFee = (amount, serviceType) => {
    let serviceFee = 0;
    if (serviceType === "Premium") serviceFee = amount * 0.15; //Making the "Premium" service type be a 15% fee.
    else if (serviceType === "Standard") serviceFee = amount * 0.10; //Making the "Standard" service type ba a 10% fee.
    else serviceFee = amount * 0.05; //Making anything else, which includes the "Basic" service type, a 5% fee.
    return serviceFee; //Returning the service fee.
}

//Logging the function with provided data using a template literal.
//Used .toFixed(2) in order to round the output to two decimal places.
console.log(`Service Fee: $${calculateServiceFee(200, "Premium").toFixed(2)}`); //Expected Output: "Service Fee: $30.00"
console.log(`Service Fee: $${calculateServiceFee(500, "Standard").toFixed(2)}`); //Expected Output: "Service Fee" $50.00"

//Task 4 - Parameter and Arguments

//Writing a function that calculates a rental cost given how many days the rental is for, the type of car, and whether they bought insurance.
function calculateRentalCost(days, carType, insurance = false){
    let rentalRates = { "Economy": 40, "Standard": 60, "Luxury" : 100}; //Declaring the different car types in an object so that the function can easily access them.
    if (insurance === true) {
        let totalCost = (rentalRates[carType] * days + (20 * days)); //Adding the insurance payment in they did buy insurance.
        return totalCost; //Returning the total cost.
    } else {
        let totalCost = (rentalRates[carType] * days); //Leaving the insurance payment out if they did not buy the insurance.
        return totalCost; //Returning the total cost.
    }
};

//Logging the function with provided data using a template literal.
//Using .toFIxed(2) to round the output to two decimal places.
console.log(`Total Rental Cost: $${calculateRentalCost(3, "Economy", true).toFixed(2)}`); //Expected Output: "Total Rental Cost: $180"
console.log(`Total Rental Cost: $${calculateRentalCost(5, "Luxury", false).toFixed(2)}`); //Expected Output: "Total Rental Cost: $500"

//Task 5 - Returning Values

//Writing a function that calcualtes a total loan payment given the principal amount, intrest rate, and time.
function calculateLoanPayment(principal, rate, time){
    let totalPayment = principal + (principal * rate * time); //Adding the intrest to the principal amount.
    return totalPayment; //Returning the total amount due.
};

//Logging the function with provdided data using a template literal.
//Used .toFixed(2) to round the output to two decimal places.
console.log(`Total Payment: $${calculateLoanPayment(1000, 0.05, 2).toFixed(2)}`); //Expected Output: "Total Payment: $1100.00"
console.log(`Total Payment: $${calculateLoanPayment(5000, 0.07, 3).toFixed(2)}`); //Expected Output: "Total Payment: $6050.00"

//Task 6 - Higher Order Functions

let transactions = [200, 1500, 3200, 800, 2500]; //Declaring an array named transactions with five values.

function filterLargeTransactions(transactions, amount){
    return transactions.filter(amount => amount > 1000); //Setting the minimum price to 1,001.
};

//Logging the array with the filter function.
console.log(filterLargeTransactions(transactions, 1000)) //Exepcted Output: [1500, 3200, 2500]

//Task 7 - Closures

//Writing a function that creates a running total of a cart total.
function createCartTracker(){
    let currentTotal = 0; //Setting the running total to 0.

    return function(price){
        currentTotal += price; //Adding the input price to the total.
        return `Total Cart Value: $${currentTotal}`; //Returning the total with a template literal.
    }
}

let cart = createCartTracker(); //Setting the function equal to "cart" to allow for ease of use.

//Logging the function using "cart".
console.log(cart(20)); //Expected Output: "Total Car Vaule: $20"
console.log(cart(35)); //Expected Output: "Total Car Value: $55"