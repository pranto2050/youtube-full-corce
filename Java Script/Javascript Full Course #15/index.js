
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







