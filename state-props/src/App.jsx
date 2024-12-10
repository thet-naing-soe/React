import { useState } from "react";
import Count from "./components/Count";
function App() {
  console.log("App Rendered");
  const [count, setCount] = useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <main className="container">
      <div className="counter">
        <button
          className="minus"
          onClick={subtract}
          aria-label="Decrease count"
        >
          -
        </button>

        <Count number={count} />

        <button className="plus" onClick={add} aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
}

export default App;
