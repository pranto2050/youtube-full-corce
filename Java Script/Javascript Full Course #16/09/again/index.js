//
//
// Input Box
const input = document.getElementById("to_do_list");

// Add Section
const outputSectin = document.getElementById("result");


// Button
const clickMe = document.getElementById("clickme");

clickMe.addEventListener("click", function (e) {
    e.preventDefault();


    let element = document.createElement("div");
    element.classList.add("result");
    let tag = document.createElement("h2");
    tag.textContent = input.value;
    input.value = '';

    const buttonMake = document.createElement("button");
    buttonMake.textContent = "Delete";
    buttonMake.classList.add("btn");

    element.append(tag);
    element.append(buttonMake)


    let addChild = document.getElementById("list_show");

    addChild.appendChild(element);


    buttonMake.addEventListener("click", function (e) {
        element.remove();
    })


})



// Or ---- Same


//
// // Input Box
// const input = document.getElementById("to_do_list");
//
// // Add Section
// const outputSectin = document.getElementById("result");
//
// // Button
// const clickMe = document.getElementById("clickme");
//
// clickMe.addEventListener("click", function (e) {
//     e.preventDefault();
//
//     let element = document.createElement("div");
//     element.classList.add("result");
//
//     let tag = document.createElement("h2");
//     tag.textContent = input.value;
//
//     const buttonMake = document.createElement("button");
//     buttonMake.textContent = "Delete";
//     buttonMake.classList.add("btn");
//
//     element.append(tag);
//     element.append(buttonMake);
//
//     let addChild = document.getElementById("list_show");
//     addChild.appendChild(element);
//
//     // Remove full div
//     buttonMake.addEventListener("click",(e)=>{
//         element.remove();
//     });
// });




