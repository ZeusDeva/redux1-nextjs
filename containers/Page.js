import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/reducer/coutnerSlice";

export default function Page() {
  const count = useSelector((state) => state.counter.value);
  const [Amount, setAmount] = useState("");
  const dispatch = useDispatch();
  // const Input = () => dispatch(actions.reset());
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.input(Amount));
    setAmount("");
  };

  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(actions.increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(actions.decrement())}
      >
        Decrement
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(actions.incrementByAmount(10))}
      >
        +10
      </button>
      <button
        arial-label="Decrement -10 value"
        onClick={() => dispatch(actions.decrementByAmount(10))}
      >
        -10
      </button>
      <button
        arial-label="Decrement -10 value"
        onClick={() => dispatch(actions.reset(0))}
      >
        Reset
      </button>

      {/* <input
        name={"lastName"}
        placeholder={"input angka"}
        type={"text"}
        onChange={(e) => setAmount(e.target.value)}
        // value={Amount}
      />
      <button onClick={Input}>Input</button> */}

      <form onSubmit={handleSubmit}>
        <label>
          <p>Add Amount</p>
          <input
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            // value={Amount}
          />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}
