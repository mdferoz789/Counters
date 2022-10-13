import React from "react";

const CounterChild2 = (props) => {
  return (
    <div>
      <button onClick={() => props.add(+1)}>+</button>
      <button onClick={() => props.subtract(-1)}>-</button>
    </div>
  );
};

export default CounterChild2;
