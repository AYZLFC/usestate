
import './Counter.css';
import { useState } from "react";
function Counter(props) {
    const [count, setCount] = useState(1)

    function incr(){
        setCount(
            function(oldCount){
                return oldCount + props.delta
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

    return (
      <div className="Counter" >
        <h1>Counter</h1>
        
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {props.delta} to Counter</button>
        <button onClick={reset}>Click to reset the Counter</button>

      </div>
    );
  }
  
  export default Counter;