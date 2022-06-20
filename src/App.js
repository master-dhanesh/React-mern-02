import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    decrement,
    increment,
    changeByAmount,
    fetchPosts,
    fetchPostsAsync,
} from "./store/features/counter/CounterSlice";

const App = () => {
    const { value } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const IncrementHandler = () => {
        dispatch(increment());
    };

    const DecrementHandler = () => {
        dispatch(decrement());
    };

    const ChangeByAmountHandler = () => {
        dispatch(changeByAmount(10));
    };

    useEffect(() => {
        dispatch(fetchPostsAsync());
    }, []);

    return (
        <div className="container mt-5 alert alert-light">
            <button onClick={IncrementHandler} className="btn btn-primary me-3">
                +
            </button>
            <span className="h1">{value}</span>
            <button onClick={DecrementHandler} className="btn btn-danger ms-3">
                -
            </button>
            <hr />
            <button onClick={ChangeByAmountHandler} className="btn btn-dark">
                Change By Amount
            </button>
        </div>
    );
};

export default App;
