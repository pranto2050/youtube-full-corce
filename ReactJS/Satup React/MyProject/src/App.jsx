
import {useState} from "react";






function App() {



    let [count, setCount] = useState(0);

    // Increment Value
    function increment(){
        count++;
        // console.log(count);
        setCount(count);
    }

    // Decrement Value
    function decrement(){
        if(count > 0){
            count--;
            setCount(count);
        }
        else (
            alert("Error Count is 0")
        )
    }

  return (
      <>
          <h1> This Is My First React Site </h1>

          <h1> Count Number: {count}</h1>

          <button type="submit" id='submit' onClick={increment}> Increment</button>
          <button type="submit" id='submit' onClick={decrement}> Increment</button>
      </>
  )
}

export default App;
