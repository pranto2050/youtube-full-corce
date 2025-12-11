

// This Is too Hard
// const element = React.createElement('h1', null, 'Hello World');
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
//
// root.render(element);



// Easy way to use and use Babling----> JSX= javasctipt XML it's Like HTML


// const element = <h1 id="Titel">Hi, I am Pranto</h1>;
// Best Partice is Use ()





// Use it
// const element = (<div>
//     <h1> Hi I am Pranto </h1>
//     <p> adfasdhfkl </p>
// </div>)





// Bater Way
// React Component
// function App(){
//     return(
//         <h1> Hellow World </h1>
//     )
// }



// Use Map And Easy Way Array Use

// const arr = ['Pranto','Santo','Sanzit','Samin'];
//
// const element = (
//     <ul>
//         {arr.map(array => <li>{array}</li>)}
//     </ul>
// )

// console.log(arr.map(a=>a));









// Component Make

const arrmm = ['Home', 'About', 'Location'];



//  Function 1 For Header
function Header(){
    return(
        // Make Style Use
        <div style={{display:'flex',justifyContent:'space-around',alignItems: 'center'}}>
            <h1>This is Header</h1>
            <ul style={{display:'flex',justifyContent:'center',alignItems: 'center', listStyle:'none', gap: '30px'}}>
                {/*{arrmm.map(item => <li> {item}</li>)}*/}

                {/* Better Way */}
                {arrmm.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}


// Function 2 For Hero Section

function HeroSection(){
    return (
        <div>
            <h2> Herro Section </h2>

        </div>
    )
}



// React Component Call and Rander
function APP() {
    return (
        <div>
            <Header/>
            <HeroSection/>

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(App());
// Or
// root.render(<App/>);
// root.render(element);
root.render(<APP />);







