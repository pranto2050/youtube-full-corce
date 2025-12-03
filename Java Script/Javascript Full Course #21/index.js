


// Prototypes and class in Javascript
console.log("Hellow World")


// Prototypes
// let arr = [10,20,30,40,50];

// let object  ={
//   name: "Pranto",
//   age: 32,
//   result: function res(number){
//     console.log("You Are Pass Your Result Is: ",number);
//   }
  
// };

// console.log(object.name);

// Secound Object
// const obs2 = {
//   amount: 100
// }

// Proto type make
// obs2.__proto__ = object;

// console.log(obs2); // Access First One Object



// arr.__proto__




// Cslss in js

// Object
// const student ={
//   name: "Santo",
//   age: 18,
//   status: "Single"
// }

// Class
class Person{
  constructor(names,ages,results = 0){
    this.name = names;
    this.age = ages;
    this.result = results;
  }
  // sayHI(){
  // console.log(`Hellow ${this.name}Age is ${this.age} You are Pass in the Exam ${this.result}`);
  // }
}

// const personeOne = new Person("Pranto",23,34)

// console.log(personeOne.name);

// personeOne.sayHI();









//  Make Bank System

class person{
  constructor(name,age,mobile,address){
    this.name = name;
    this.age = age;
    this.mobile = mobile;
    this.address = address;
  };
  output(){
    console.log(`Customar Name is: ${this.name} age is: ${this.age} mobile Number is: ${this.mobile}. Customar Address is: ${this.address}`);
  };
};


// const santo = new person("Santo",23,1979728818,"Kushtia");
// console.log(santo.output());

class bank extends person{
  constructor(name,age,mobile,address,account,balance){
    // Pass value Parent Class use Super---> Call Parent Constructor use Super
    super(name,age,mobile,address);
    // now Pass value this class
    this.account = account;
    this.balance = balance;
  };
  
  chackBalence(){
    console.log(`Your Account Number is: ${this.account}, Your Balance is: ${this.balance}`);
  }
};

// Value Pass and Output
const santo = new bank('Santo',23,1293434,'Kushtia',32232323,2000);
console.log(santo.chackBalence(),santo.output());




























