import { useState } from "react";
import Display from "./components/Display";

function App() {
  var stateArray = useState(0);
  var count = stateArray[0];
  var setCount = stateArray[1];

  function increment() {
    if (count >= 10) {
      alert("Count cannot be greater than 10");
      return;
    }
    setCount(count + 1);
  }

  function decrement() {
    if (count <= -10) {
      alert("Count cannot be less than -10");
      return;
    }
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter App</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <Display value={count} />
    </div>
  );
}

export default App;
