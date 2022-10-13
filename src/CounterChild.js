import React from "react";

export const CounterChild = ({ set, getSet }) => {
  return (
    // return <button onClick={()=>set}>Click for Add</button>;
    // <button onClick={getSet(set + 1)}>click</button>
    <>
      <button onClick={() => getSet(set + 1)}>+ incerment</button><br/>
      <button onClick={() => getSet(set - 1)}>- decrement</button> <br/>
    </>
    
  );
};
