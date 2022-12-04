import './App.css';
import Counter from './Counter';
import { useState } from "react";

function App() {
  const [delta, setDelta] = useState(1)
  const [maxNum, setMaxNum] = useState(1)
  const [reset, setReset] = useState(false)
  const [ maxValue, setMaxValue] = useState(1)

  function handleDelta(event1){
    //console.log(event);
    setDelta(Number(event1.target.value))
  }

  function handleMaxNum(event2){
    setMaxNum(Number(event2.target.value))
  }

  function getReset(data){
    console.log(data)
    setReset(data)
  }

  function getCountValue(data2){
    setMaxValue(
      function(oldMaxValue){
        return (Math.max(oldMaxValue,data2))
      }
      
    )
  }

  return (
    <div className="App">
      Usestate
      <br/>Delta: 
      <input type= "number" value={delta} onChange={handleDelta}/>
      <br/>
      <br/>Limit: 
      <input type= "number" value={maxNum} onChange={handleMaxNum}/>
      <br/>
      Maximum value is: {maxValue}
      <Counter delta = {delta} maxNum = {maxNum} getReset = {getReset} needToReset = {reset} getCountValue = {getCountValue}/>
      <Counter delta = {delta} maxNum = {maxNum} getReset = {getReset} needToReset = {reset} getCountValue = {getCountValue}/>

    </div>
  );
}

export default App;
