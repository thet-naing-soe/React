import { useState } from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);
  function toggleShown() {
    setIsShown((prev) => !prev);
  }
  return (
    <>
      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      {isShown ? <p className="punchline">Punchline: {props.punchline}</p> : null}
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} punchline
      </button>
      <hr />
    </>
  );
}
