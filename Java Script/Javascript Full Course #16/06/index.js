


let result = document.getElementById("result");
let setTime = document.getElementById("set_time"); // Set Ending Time

// Ending Date
const end_time = new Date(2026,10,22); // Set Ending Date

let Ending_Data_convartMiliSecound = end_time.getTime();






setInterval(()=>{

    // Today Date
    let todatDat = Date.now();
// Count Down Time
    let countDown = Ending_Data_convartMiliSecound - todatDat;

    let day = Math.floor((countDown)/(1000 * 60 * 60 * 24));
    countDown%= 1000 * 60 * 60 * 24;
    let hour = Math.floor((countDown)/(1000 * 60 * 60));
    countDown%= 1000 * 60 * 60;

    let minit = Math.floor((countDown)/(1000 * 60));
    countDown%= 1000 * 60;

    let secound = Math.floor((countDown)/(1000));
    countDown%= 1000;

    setTime.textContent = `day: ${day}:Hour: ${hour}: Minit: ${minit}: secound: ${secound}`;

},1000)









