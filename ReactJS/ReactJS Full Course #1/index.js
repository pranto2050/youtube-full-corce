





function createElement (tag,artubete,cildren){
    const elleent = document.createElement(tag);
    elleent.textContent = children;
    for(const key in artubete){
        elleent[key] = artubete[key];
    }

    return elleent;
}




const element = document.createElement('h1', {className: 'heading',id: 'thisIsHeading',style:{backgroundColor: 'red',color: 'Blue'}},'I am Pranto');

const root = document.getElementById('root');



const rea = "hi";







