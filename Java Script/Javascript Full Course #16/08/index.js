




let bodys = document.querySelector('body');

bodys.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);

    const element = document.createElement('div');
    element.classList.add('clicke');
    const color = ['red', 'green', 'blue', 'purple', 'pink'];
    element.style.backgroundColor = color[Math.floor(Math.random() * color.length)];

    element.style.top = `${e.clientY-50}px`;
    element.style.left = `${e.clientX-50}px`;

    // Add Element
    bodys.append(element);


    // Remove Element after 5 Secound = 5000
    setTimeout(()=>{
        element.remove();
    },5000)
})




