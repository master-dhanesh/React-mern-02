import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    incrementByAmountAsync,
} from "./store/reducers/counterSlice";

const App = () => {
    const { value } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const OnIncrement = () => {
        dispatch(increment());
    };

    const OnDecrement = () => {
        dispatch(decrement());
    };

    const OnIncByValue = () => {
        dispatch(incrementByAmountAsync(12));
    };

    return (
        <div className="mt-5 container ">
            <button onClick={OnDecrement}>-</button>
            <span className="ms-3 me-3">{value}</span>
            <button onClick={OnIncrement}>+</button>
            <br />
            <button onClick={OnIncByValue}>Increment By Value</button>
        </div>
    );
};

export default App;
