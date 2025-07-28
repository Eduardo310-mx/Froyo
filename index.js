// prompt the user for froyo flavors and store their input
let flavors = prompt(
    "Please enter flavors of ice cream",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

//Parsing user input into array of froyo flavors
flavors = flavors.split(",");
// console.log(flavors);

//object to track which flavors it have counted so far
const getFlavors = (flavors) => { //defines a function named getFlavors that takes one argument, flavors
    let customerOrders = {}; // create an empty object called customerOrders
    for (let flavor of flavors) { //A loop goes through each flavor in the array.
        if (customerOrders[flavor]){ // check if the flavor already exists as a key in the customerOrders object
            customerOrders[flavor] += 1; //If it does, increase the count by 1.
        } else {
            customerOrders[flavor] = 1; //If it doesn't, add it to the object with a starting count of 1.
        }
    }
    return customerOrders; //it returns the customerOrders object, which now has the count of each flavor.
};

console.log(getFlavors(flavors));
