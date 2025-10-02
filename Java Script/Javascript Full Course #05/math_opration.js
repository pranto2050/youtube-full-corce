//
//
//
//
// let num_one = 10;
// let num_two = 10.323423;
// let sum = num_one + num_two;
// console.log(sum);
// let store = sum.toFixed(2) ;// toFixed number convart to string
// let con = Number(store);
// // if I want to fixed after poin show only two value than use = toFixed(show count value)
//
// console.log(store);
// console.log(typeof(store));
// console.log(con);
// console.log(typeof(con));
//
// // Positive Number Make
// console.log(Math.abs(-23)); // Out put is: 23
//
//
//
// console.log(Math.ceil(2.4)); // Output : 3
// console.log(Math.floor(2.4)); // Output : 2
//
//

// console.log(Math.abs(-10))


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRandomInt(0,50));

// console.log(Math.ceil(Math.random()*10)+10); // +10 Is Start Value and *10 is End Value that means 10 + 10 = 20 so Number give 10 to 20 number
// Furmula---- that is


// let number_start = 10;
// let number_end = 22;
//
// let randomNum = Math.ceil(Math.random() * (number_end - number_start + 1)) + number_start;
// console.log(randomNum);



// For Desite Randam OTP Generate

// console.log(Math.floor(Math.random()*(9999-1000+1))+10);


// Work Function

function random_number(max_num,min_number){
    return Math.floor(Math.random()*(max_num -min_number +1)+min_number);
}

// Call Function for Random Number
console.log(getRandomInt(1000,9999));