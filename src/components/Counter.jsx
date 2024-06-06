import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");





  useEffect(() => {
    // Show welcome popup when page loads
    setPopupMessage("Welcome to the Counter App!");
    setShowPopup(true);

    // Hide popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (count === 10 || count % 1000 === 0) {
      setPopupMessage(`Count has reached ${count}!`);
      setShowPopup(true);

      // Hide popup after 3 seconds
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [count]);

  const handleIncrease = () => {
    let newCount;
    let color;
    if (count < 10) {
      newCount = count + 1;
      setBackgroundColor("#aaa000");
    } else if (count < 100) {
      newCount = count + 10;
      setBackgroundColor("#000000");
    } else if (count < 1000) {
      newCount = count + 100;
      setBackgroundColor("#bbbbbb");
    } else {
      newCount = count;
    }

    setCount(newCount);
  };

  const handleDecrease = () => {
    let newCount;
    if (count > 100) {
      newCount = count - 100;
    } else if (count > 10) {
      newCount = count - 10;
    } else if (count > 0) {
      newCount = count - 1;
    } else {
      newCount = count;
    }

    setCount(newCount);
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease} disabled={count >= 1000}>
        Increase
      </button>
      <button onClick={handleDecrease} disabled={count <= 0}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
