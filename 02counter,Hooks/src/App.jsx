import { useState } from "react";
import "./App.css";

function App() {
  // let counterVal = 5;
  let [counterVal, setCounterVal] = useState(0);
  /* useState hook */

  function addValue() {
    setCounterVal(counterVal + 2);
    /*
      document.querySelector(".counterval").textContent ="Counter value:" + counterVal;
      everytime we have to do this
      insted of doing this we react give us hooks which we 
      can use
    */
  }

  function removeValue() {
    if (counterVal <= 0) {
      counterVal = 0;
    } else {
      setCounterVal(counterVal - 2);
    }
  }

  function resetValue(){
    setCounterVal(0);
  }

  return (
    <>
      <h1>React</h1>
      <h2 className="counterval">Counter value: {counterVal}</h2>
      <button onClick={addValue}>add value 2</button> <br />
      <button onClick={removeValue}>remove value 2</button>
      <button onClick={resetValue}>reset</button>
    </>
  );
}

export default App;
