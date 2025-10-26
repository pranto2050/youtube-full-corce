

// Function in javascript




console.log('Hello World');




// Make a function
function print(){
  console.log('My name is MD.pranto Ali')
}
// Call Function
print()



// Parameter and Argument pass function
// Make function receved Parameter
function sum(num1,num2){
  let sum = num1 + num2;
  return sum;
}
// Output and pass Argument

sum(10,30);




// Function
let fun = function(num11, num22){
  let sum = num11 + num22;
  console.log(sum);
};

// Function Call
fun(10,10);



// Rest Oprator
// Receved Parameter as a Array
function rest (...nums){
  let sum = 0;
  for(let num of nums){
    sum = sum + num;
  }
  console.log(nums);
  return sum;
};

// Pass Argument
rest(21,23,45,56,)





// Arrow Function
let addNumber = () =>{
  console.log('Pranto');
};
addNumber();

// Return and Parameter pass and argument receved
// If just Return
let addNumbers = (num1,num2) =>  num1 + num2;
console.log(addNumbers(23,55));



let arr = [23,34,56,32,35];



// IIFE 
// Autometic Call Function 

(function(){
  console.log('Pranto');
})();



// Call Back Function






















