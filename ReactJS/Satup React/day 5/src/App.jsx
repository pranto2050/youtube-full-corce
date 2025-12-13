


function App() {

    async function userProfile(){
        const response = await fetch('https://api.github.com/', {});
        const data = await response.json();
        console.log(data)
    };

    userProfile();


    return(
        <div className="App">
            <h1> Hellow World Our github User </h1>





        </div>
    )
}
export default App;