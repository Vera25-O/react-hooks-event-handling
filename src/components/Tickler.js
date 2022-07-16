import React from "react";

function Tickler() {
  function tickle() {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
