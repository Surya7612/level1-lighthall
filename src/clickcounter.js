import React, { useState, useEffect } from "react";

import "./clickcounter.css";


function ClickCounter() {
    const [count, setCount] = useState(
      parseInt(localStorage.getItem("count")) || 0
    );
    
    useEffect(() => {
      localStorage.setItem("count", count);
    }, [count]);
  
    const handleButtonClick = () => {
      setCount(count + 1);
    };
  
    return (
      <div className="click-counter-container">
        <div className="click-counter button">
          <h1>Click-a-thon!</h1>
          <p>Total Clicks: {count}</p>
          <button onClick={handleButtonClick}>Click me!</button>
        </div>
      </div>
    );
  }
  
  export default ClickCounter;