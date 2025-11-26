

// Input Box
const input = document.getElementById("to_do_list");


// Add Section
const outputSectin = document.getElementById("result");



// Button
const clickMe = document.getElementById("clickme");
clickMe.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Click Me!");
    // Tag make and Add
    let element = document.createElement("h2");
    element.textContent = input.value;
    // Button making And Add
    const buttonMake = document.createElement("button");
    buttonMake.textContent = "Delete";
    buttonMake.classList.add("btn");
    // Add Section
    outputSectin.appendChild(element);
    outputSectin.appendChild(buttonMake);
    input.value = '';
})

const classFind = document.getElementById("result");
classFind.addEventListener("click", (e)=>{

})






