


// console.log("Hello Javascript Full Course #14");

let newTagHeading = document.createElement("h1");
newTagHeading.innerText = "Welcome to JavaScript!";
newTagHeading.id = "new-tag";
// console.log(newTagHeading.innerText);



// Add In Font End
let select = document.getElementById("fast");
select.after(newTagHeading);
// console.log(select);









// Array Name Show in My Website ----> Not Use Just for Try
const arrayName = ["Santo", "Pranto", "Rohan", "Samin", "Sanzit"]

const unoderList = document.getElementById("unoder_List");
// console.log(unoderList);
// let createElement = document.createElement("li");
// createElement.innerText = "Hi";
// unoderList.append(createElement);


// Use loop for get name and add in Website
for(let name of arrayName){
    // let createElement = document.createElement("li");
    // createElement.innerText = name;
    // console.log(createElement);
    // unoderList.append(createElement);
}

// let nameArr = [...unoderList];
// console.log(nameArr);

// console.log(unoderList);




// V.V.V
// Previous code is not based practice based practice is below
const arrayNames = ["Santo", "Pranto", "Rohan", "Samin", "Sanzit"]

const New_unoder_List = document.getElementById("unoder_List");
const fregment = document.createDocumentFragment();

for(let name of arrayNames){
    const createElement = document.createElement("li");
    createElement.innerText = name;
    fregment.append(createElement);
}
New_unoder_List.append(fregment);

// const selectUnoderList = document.getElementById("unoder_List");









// Use Other Logic Use Array










