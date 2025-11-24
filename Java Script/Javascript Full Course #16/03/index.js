


// Full From
const fromm = document.querySelector('form');
// Input
let boy = document.getElementById('boy');
let girl = document.getElementById('girl');

// Result Show:
let result = document.querySelector("h1");
// console.log(fromm);
// Button Select
fromm.addEventListener('submit', (e) => {
    e.preventDefault();
    let boyVale = boy.value;
    let girlVale = girl.value;
    // console.log(boyVale);
    // console.log(girlVale);

    let chack_boy =girlVale.length;
    let girl_Chack = boyVale.length;

    let resullt = Math.pow(chack_boy+girl_Chack,3) % 101;

    console.log(girl_Chack);
    console.log(chack_boy);

    result.innerText = `Result : ${resullt} %`;
    fromm.reset();

})





































