



// Call, apply, bind

// this call apply bind
// this: class object Methord
// Strict mode vs non Strict Mode

// Update Latest Javascript . Mode Use first top on Javasecipt -> 'use strict';
'use strict';

var a = 10;
var b = 20;


// console.log(a,b);








// Window , global and globalThis


// Can't Run Terminal Only Run Browser - Window for Browser
// console.log(window);

// Only Run Terminal this is not Run Browser -> global for terminal
// console.log(global);

// Run Every Where In Browser and Terminal -> globalThis Every Where
// globalThis Point Global Environment it make Uneversal
// console.log(globalThis);





// Larn About this Keyword
// Larn Javascript "this"  -> If terminal give only {Empty} Object
// But In Browser point global Object

// console.log(this);

// Use this on function;

const people = {
  name: 'Pranto',
  age: 23,
  address: 'Kushtia',
  out: function(){
    console.log(this)
    // Not Use Hard code like people.name , people.age, people.address. Remember that Use this keyword like  this.name, this.age
    console.log(`Hellow ${this.name}, You are: ${this.age} and you are from ${this.address}`) 
  }
}
// Here is this == people -> this keword point on people
// people.out();













// Single Function Use

// function output(){
//   console.log(`Your Name is: ${this.name}`);
// }

// const student = {
//   name: 'Santo',
//   roll: 12,
//   mobile: 324342
// }

// const student2 = {
//   name: 'Pranto',
//   roll: 23303101
// }
// // Get student name for Easy not make function multiple time
// output.call(student);
// output.call(student2);











// function output(){
//   console.log(`Your Name is: ${this.name}`);
// }

// const student = {
//   name: 'Santo',
//   roll: 12,
//   mobile: 324342,
//   show: output
// }

// console.log(student.show())


// Better

// function output(){
//   console.log(`Your Name is: ${this.name} your age is: ${this.roll}`);
// }

// const student = {
//   name: 'Santo',
//   roll: 12,
//   mobile: 324342,
//   show(){
//     output.call(this);
//   }
// }

// student.show();













// <<<<<<< ------ Arrow Function ---- >>>>>>>
// Arrow Function

function Stopwatch() {
  this.seconds = 0;

  this.start = function() {
    // The `this` in this scope correctly points to the stopwatch instance.

    setInterval(() => {
      // This is an arrow function. It has no `this` of its own.
      // It inherits `this` from its parent, the `start` function.
      // Therefore, `this` here is the stopwatch instance. It just works.
      console.log(this.seconds);
      this.seconds++;
    }, 1000);
  };
}

const myWatch = new Stopwatch();
myWatch.start(); // This works perfectly!

















