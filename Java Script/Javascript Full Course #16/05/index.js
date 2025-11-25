



let showTimw = document.querySelector("h2");


setInterval(() => {
    let time = new Date();
    showTimw.textContent = time.toLocaleTimeString();
}, 1000)



