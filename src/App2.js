import React, { useState } from "react";
import CounterChild2 from "./CounterChild2";

const App2 = () => {
  const [counterB, setCounterB] = useState(0);

  return (
    <div className="App">
      <h1>CounterChild2</h1>
      <h3>{counterB}</h3>
      <CounterChild2
        add={(counterB) => setCounterB(counterB)}
        subtract={(counterB) => setCounterB(counterB)}
      />
    </div>
  );
};

export default App2;
