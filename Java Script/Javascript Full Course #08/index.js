





//  Object

// Access Object Data using Two Way
// 1. Dot Notation
// 2. Backet Notation


// Object CRUD Opration = Create, Read, Update, Delete


let user = {
    name: `Pranto`,
    age: 20,
    email: "prantoislamnt51@gmail.com",
    mobile: `01979728818`
}
// console.log(user.name) // Use Dot Notation
// console.log(user[`name`]) // Use Backet Notation



// Nid Card Information

let users_data = {
    name: `Pranto`,
    age: 20,
    email: "prantoislamnt51@gmail.com",
    mobile: `01979728818`,
    address: `Kushtia`,
    id: 23303101
}
// Create Key and insert Value
users_data.bloodGroup = `a+`;

// Update Value->
// users_data.age = 40; // Update
// console.log(users_data);

// Remove and Delete Data
// delete users_data.email;
// console.log(users_data);


// Loop Using in Object
// for ( let key in users_data){
//     // console.log(key);
//     console.log(key,users_data[key]);
// }








let users = {
    name: `Pranto`,
    age: 20,
    email: "prantoislamnt51@gmail.com",
    mobile: `01979728818`,
    address: `Kushtia`,
    id: 23303101
}

// let name = users.name;
// let age = users.age;

// console.log(name);
// console.log(age);

// Short Cut or short hand is -> Use Object Distructure format is => let{ need key name } = Object Name

const {name,age} = users;
// console.log(name,age);

// Change Key Name
const {name:userName,age:userAge} = users;
// console.log(userName,userAge);



// For of Loop Use Only Array. Dont use in Object
// But if you want to apply for of loop it possible but it's have a roles....
// 1. Convart Object in Array
// 2. Than use for of loop







// For Of Loop


let uses = {
    name: `Pranto`,
    age: 20,
    email: "prantoislamnt51@gmail.com",
    mobile: `01979728818`,
    address: `Kushtia`,
    id: 23303101
}
console.log(uses);


































