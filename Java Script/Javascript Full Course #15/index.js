
const changeText = document.getElementById("top_heading");
function clickme(){
    changeText.style.color = "Purple";
    changeText.style.fontSize = "40px";
    // console.log(changeText.innerText);
}

function clickme2(){
    changeText.innerText = "Welcome to JavaScript!";
    changeText.style.color = "Green";
    changeText.style.fontSize = "60px";
}

// Long And not Easy
// const elementButton = document.getElementById("advance_button");
// elementButton.onclick = function handelClick(){
//     let creactElement = document.createElement("h1");
//     creactElement.innerText = "Welcome Bolod Click Me";
//     changeText.after(creactElement);
// };

// Easy And very Shortly
const elementButton = document.getElementById("advance_button");
elementButton.addEventListener('click', ()=>{

});


// Advance
let adv = document.getElementById("advance_button");

adv.addEventListener('click',()=>{
    console.log(adv);
})






// Div Ude -- Not Best Patice
const parent = document.getElementById("onne");
const findChild = parent.children

for(let child of parent.children){
    // console.log(child);
    child.addEventListener('click',()=>{
        child.style.color = "green";
    })
}



// Use (e) Call Back Function
const newDev = document.getElementById("myTwo");
const childernss = newDev.children;

for(let childdd of childernss){
    // console.log(childdd);
    childdd.addEventListener("click",(e)=>{
        console.log(e.target) // Get The Target Value or Tage
    })
}






