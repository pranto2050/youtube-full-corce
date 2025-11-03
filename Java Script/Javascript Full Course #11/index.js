


// Scope ---- Global and Local


// Global -> Access Everywhere
// function -> Only Use On Function this is not access in out side function

let carName = "Volvo"; // Global scope

function showName() {
  console.log(carName); // Can access carName here too
}
// Print out
showName();


function showMessage() {
  let message = "Hello!"; // Local scope
  console.log(message); // Works inside function
}
console.log(message); // Error: message is not defined


















let x = 10;
let y = x++ + ++x;
console.log(y);











