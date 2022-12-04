
import './Counter.css';
import { useState, useEffect } from "react";
function Counter(props) {
    const {delta, getReset, needToReset} = props
    const [count, setCount] = useState(1)

    useEffect(()=>{
      if(needToReset){
        setCount(0)
        getReset(false)
      }
    },[needToReset, getReset])

    function incr(){
        setCount(
            function(oldCount){
                if (oldCount + delta > props.maxNum){
                  return 1
                }
                return oldCount + delta
            }
        )
    }
    
    function reset(){
      getReset(true)
      //setCount(
        //function(oldCount){
          //return oldCount = 1
        //}
      //)
    }

    return (
      <div className="Counter" >
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Click to reset the Counter</button>

      </div>
    );
  }
  
  export default Counter;