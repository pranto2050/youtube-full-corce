




let textFind = document.getElementById('text_fild');
// console.log(textFind);

let buttonClick = document.getElementById('button');

let showText = document.getElementById("resulr");

let showDiv = document.getElementById("show_texxt");

buttonClick.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(showText.innerText);

    for (let i = 0; i <= 10; i++) {
        let newHeading = document.createElement("h1");
        newHeading.innerText = textFind.value;
        showDiv.appendChild(newHeading);
    }
});

