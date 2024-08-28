import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/slices/CounterSlice";
import './Counter.css'


function Counter() {

    const count= useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();



    return (
        <div className="box">
            <div className="heading">
                <h3>Increment & Decrement </h3>
            </div>
            <div className="counterBox">

                <button onClick={()=>dispatch(decrement())}>-</button>

                <span className="separator">|</span>
                <h2>{count}</h2>
                <span className="separator">|</span>

                <button onClick={()=>dispatch(increment())}>+</button>
            </div>
            <div className="resetButton">

                <button  onClick={()=>dispatch(reset())}>Reset</button>

            </div>
          </div>
    );
}

export default Counter;