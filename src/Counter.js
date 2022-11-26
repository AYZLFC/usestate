import { useState } from "react";
import './Counter.css';
function Counter() {
    const [count, setCount] = useState(1)
    const [delta, setDelta] = useState(1)
    
    function incr(){
        setCount(
            function(oldCount){
                return oldCount + delta
            }
        )
    }
    
    function reset(){
      setCount(
        function(oldCount){
          return oldCount = 1
        }
      )
    }

    function handleDelta(event){
      //console.log(event);
      setDelta(Number(event.target.value))
    }
    
    return (
      <div className="Counter" >
        <h1>Counter</h1>
        <input type= "number" value={delta} onChange={handleDelta}/>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Click to reset the Counter</button>

      </div>
    );
  }
  
  export default Counter;