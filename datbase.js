// Define an array to act as our database
let database = [];

// Function to add data to the database
function addData(name, age, adharnumber) {
    database.push({ name: name, age: age, adharnumber: adharnumber });
}

// Function to retrieve data from the database
function getData() {
    return database;
}

// Example usage:
addData("abcdef", 30, 12345678912);
addData("zyx", 25, 123123456789);

console.log("Database:");
console.log(getData());
