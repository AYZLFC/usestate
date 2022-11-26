import './App.css';
import Counter from './Counter';
import { useState } from "react";

function App() {
  const [delta, setDelta] = useState(1)
  const [maxNum, setMaxNum] = useState(1)

  function handleDelta(event1){
    //console.log(event);
    setDelta(Number(event1.target.value))
  }

  function handleMaxNum(event2){
    setMaxNum(Number(event2.target.value))
  }

  return (
    <div className="App">
      Usestate
      <br/>Delta: 
      <input type= "number" value={delta} onChange={handleDelta}/>
      <br/>
      <br/>Max Number: 
      <input type= "number" value={maxNum} onChange={handleMaxNum}/>
      <Counter delta = {delta} maxNum = {maxNum} />
      <Counter delta = {delta} maxNum = {maxNum}/>

    </div>
  );
}

export default App;
