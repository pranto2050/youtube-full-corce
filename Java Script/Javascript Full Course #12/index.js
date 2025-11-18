// For Eatch


// let arra = [10,30,50,20];

// let sum = 0;

// arra.forEach((n) =>{
//   sum = sum+n;
// })
// console.log(sum);

// filter
// Short Version ---- Filter
let arra = [10,30,50,20];
let news = arra.filter(numm => numm > 20 )
console.log(news)


// Expaline Or Long Version ----- Filter
let newArray = [10,40,22,50,48,19,49,94];
let newArr = [];

console.log("Array Length is: " + newArray.length)

for(let i = 0; i < newArray.length; i++){
  // console.log(newArray[i])
  if(newArray[i] > 30){
    // console.log(newArray[i])
    newArr.push(newArray[i])
  }
}
console.log(newArr);





// Map -------- 

// let nwewArr = [10,40,22,50,48,19,49,94];
// let Dauble = nwewArr.map ((num) => num*2 )
// console.log(Dauble);



// Example;

let product = [
    {
        name: "HP",
        model: "Pavilion 15",
        price: 700,
        processor: {
            brand: "Intel",
            model: "Core i5-1135G7",
            generation: "11th Gen",
            baseClock: "2.4GHz",
            boostClock: "4.2GHz",
            cores: 4,
            threads: 8
        },
        ram: "8GB DDR4",
        storage: "512GB SSD",
        release_date: "2022-08-15"
    },

    {
        name: "Dell",
        model: "Inspiron 14 5430",
        price: 800,
        processor: {
            brand: "Intel",
            model: "Core i7-1255U",
            generation: "12th Gen",
            baseClock: "1.7GHz",
            boostClock: "4.7GHz",
            cores: 10,
            threads: 12
        },
        ram: "16GB DDR4",
        storage: "512GB SSD",
        release_date: "2023-05-21"
    },

    {
        name: "Lenovo",
        model: "ThinkPad T14",
        price: 1000,
        processor: {
            brand: "AMD",
            model: "Ryzen 5 5600U",
            generation: "5000 Series",
            baseClock: "2.3GHz",
            boostClock: "4.2GHz",
            cores: 6,
            threads: 12
        },
        ram: "16GB DDR4",
        storage: "512GB SSD",
        release_date: "2022-12-10"
    },

    {
        name: "Acer",
        model: "Aspire 7",
        price: 200,
        processor: {
            brand: "AMD",
            model: "Ryzen 5 5500U",
            generation: "5000 Series",
            baseClock: "2.1GHz",
            boostClock: "4.0GHz",
            cores: 6,
            threads: 12
        },
        ram: "8GB DDR4",
        storage: "512GB SSD",
        release_date: "2023-02-01"
    },

    {
        name: "Asus",
        model: "Vivobook 15",
        price: 600,
        processor: {
            brand: "Intel",
            model: "Core i3-1215U",
            generation: "12th Gen",
            baseClock: "1.2GHz",
            boostClock: "4.4GHz",
            cores: 6,
            threads: 8
        },
        ram: "8GB DDR4",
        storage: "256GB SSD",
        release_date: "2023-01-11"
    },

    {
        name: "MSI",
        model: "Modern 15",
        price: 500,
        processor: {
            brand: "Intel",
            model: "Core i7-1260P",
            generation: "12th Gen",
            baseClock: "2.1GHz",
            boostClock: "4.7GHz",
            cores: 12,
            threads: 16
        },
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        release_date: "2023-06-05"
    },

    {
        name: "Apple",
        model: "MacBook Air M1",
        price: 820,
        processor: {
            brand: "Apple",
            model: "M1 Chip",
            generation: "1st Gen",
            baseClock: "3.2GHz",
            boostClock: "—",
            cores: 8,
            threads: 8
        },
        ram: "8GB Unified RAM",
        storage: "256GB SSD",
        release_date: "2020-11-17"
    },

    {
        name: "Samsung",
        model: "Galaxy Book2",
        price: 430,
        processor: {
            brand: "Intel",
            model: "Core i5-1235U",
            generation: "12th Gen",
            baseClock: "1.3GHz",
            boostClock: "4.4GHz",
            cores: 10,
            threads: 12
        },
        ram: "8GB DDR4",
        storage: "512GB SSD",
        release_date: "2023-03-10"
    },

    {
        name: "Huawei",
        model: "MateBook D15",
        price: 780,
        processor: {
            brand: "Intel",
            model: "Core i5-1135G7",
            generation: "11th Gen",
            baseClock: "2.4GHz",
            boostClock: "4.2GHz",
            cores: 4,
            threads: 8
        },
        ram: "8GB DDR4",
        storage: "512GB SSD",
        release_date: "2022-05-23"
    },

    {
        name: "Xiaomi",
        model: "Mi Notebook Pro",
        price: 100,
        processor: {
            brand: "Intel",
            model: "Core i7-11370H",
            generation: "11th Gen",
            baseClock: "3.3GHz",
            boostClock: "4.8GHz",
            cores: 4,
            threads: 8
        },
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        release_date: "2022-07-19"
    }
];

// With Short
// let priceFilter = product.filter((product) => product.price > 700).sort((a,b)=>b.price-a.price);
// console.log(priceFilter);


// Use Map ......

// let useMap = product.map((prod) => ({name:prod.name,price:prod.price}));
// console.log(useMap);






// Reduce......
// oldvalue = sun
// currentvalue = Product Price
// let sum = product.reduce((oldvalue,currentvalue) => {
//   return oldvalue + currentvalue.price;
// },0)

// console.log(sum);





//  Advance

// let advance = product.filter((product) => product.price > 700).sort((a,b)=>b.price-a.price).reduce((oldvalue,currentvalue) => {
//   return oldvalue + currentvalue.price;
// },0);
// console.log(advance);


// Set Use------

let myArr = [10,30,05,30,43,56,6,32,87,12]
console.log(myArr);
// ---- Set -----
let newFilter = new Set(myArr);
// console.log(newFilter);

let nameArray = ["santo","pranto","rohan","prappo","santo"];
let uniqueName = new Set(nameArray);
console.log(uniqueName);

let newnNameArray = [...new Set(nameArray)];
console.log(newnNameArray);
// Short
let againArrayNew = [...uniqueName];
console.log(againArrayNew);





















