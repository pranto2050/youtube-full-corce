let form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop the page from reloading
    let input = document.getElementById("text_fild").value;
    console.log(input);
});