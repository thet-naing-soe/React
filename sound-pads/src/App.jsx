import Pad from "./components/Pad";
import { useState } from "react";
import padsData from "./api/pads";

function App() {
  const [pads, setPads] = useState(padsData);
  const buttonElements = pads.map((pad) => (
    <Pad
      toggle={toggle}
      on={pad.on}
      color={pad.color}
      id={pad.id}
      key={pad.id}
    />
  ));
  function toggle(id) {
    setPads((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }
  function turnAllPadsOff() {
    console.log("Turn All Off");
    setPads((prevPads) => prevPads.map((pad) => ({ ...pad, on: false })));
  }
  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
      <button className="all-off" onClick={turnAllPadsOff}>
        Turn All Off
      </button>
    </main>
  );
}

export default App;
