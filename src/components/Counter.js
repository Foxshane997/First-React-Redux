import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [input, setInput] = useState(0);

    const byAmountSubmit = (e) => {
        e.preventDefault();
        dispatch(incrementByAmount(Number(input)));
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>
                increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                decrement
            </button>
            <form onSubmit={byAmountSubmit}>
                <input
                    placeholder="Add an amount!"
                    type="number"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Counter;
