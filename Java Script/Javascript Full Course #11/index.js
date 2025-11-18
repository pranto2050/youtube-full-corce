


// Scope ---- Global and Local


// Global -> Access Everywhere
// function -> Only Use On Function this is not access in out side function

// let carName = "Volvo"; // Global scope

// function showName() {
//   console.log(carName); // Can access carName here too
// }
// Print out
// showName();



// function showMessage() {
//   let message = "Hello!"; // Local scope
//   console.log(message); // Works inside function
// }
// console.log(message); // Error: message is not defined







// let x = 10;
// let y = (x++) + (++x);
// console.log("out put is " + y);














// Closure -> Private Function 
// Make A bank and balance is private 

function myBank(){
  let balance = 500;
  
  return user = {
    deposit: function cashIn(inAmount){
      if(typeof inAmount === "number" && inAmount <= balance){
        balance = balance + inAmount;
        return balance;
      }
    },
        
    withdro: function cashOut(outAmount){
      if(typeof outAmount === "number" && outAmount <= balance){
        balance = balance - outAmount;
        return balance;
        }
    },
    
    
    balance: function seeBalance(){
      return balance;
    }
  }
}

let uss = myBank();
console.log(uss.deposit(200));
console.log(uss.withdro(100));
console.log(uss.balance);































