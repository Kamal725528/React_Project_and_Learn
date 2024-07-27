import { useState } from 'react';
import './Counter.css'


function Counter(){

    const [count, setCount]= useState(0);

    function decrementHandler(){
        setCount(count-1);
    }

    function incrementHandler(){
        setCount(count+1);
    }

    function resetHandler(){
        setCount(0);
    }

    return(
        <>
          <div className="box">
            <div className="heading">
                <h3>Increment & Decrement </h3>
            </div>
            <div className="counterBox">
                <button onClick={decrementHandler}>-</button>
                <span className="separator">|</span>
                <h2>{count}</h2>
                <span className="separator">|</span>
                <button onClick={incrementHandler}>+</button>
            </div>
            <div className="resetButton">
                <button onClick={resetHandler}>Reset</button>
            </div>
          </div>
        
        </>
    );
}

export default Counter