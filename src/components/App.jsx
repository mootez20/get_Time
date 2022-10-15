import React, { useState } from "react";

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  function getTime() {
    const newCurrentTime = new Date().toLocaleTimeString();

    setTime(newCurrentTime);
  }
  setInterval(getTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
