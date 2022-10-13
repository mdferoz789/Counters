import { useState } from "react";
import { CounterChild } from "./CounterChild";
import "./App.css"

export default function App() {
  const [set, getSet] = useState(0);
  // const add = () => getSet(set + 1);
  return (
    <div className="App">
      <h1>{set}</h1>
      <CounterChild set={set} getSet={getSet} />

      <input  value={set} />
      {/* <Counter set={set} getSet={getSet} /> */}
      {/* <Counter set={set} getset={getSet} /> */}
      {/* <h2>Star</h2>
      // <h1> {set}</h1> */}

      {/* <button onClick={() => getSet(set + 1)}>Click</button> */}
    </div>
  );
}
