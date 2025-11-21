



const parennt = document.getElementById('full_body');

parennt.addEventListener('click', (e) => {
    // console.log(e.target);
    const color_Change = e.target;
    const full_dev = document.getElementById('full_body');
    parennt.style.backgroundColor = e.target.id;
    // console.log(color_Change);
})