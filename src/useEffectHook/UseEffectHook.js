import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  useEffect(() => {
    console.log(`Inside the useEffect function. Count is ${count}`);
  });

  return (
    <div>
      <br />
      <button onClick={handleIncrease}>Increase</button>&nbsp;&nbsp;
      <button onClick={handleDecrease}>Decrease</button>&nbsp;&nbsp;
      <h1>{count}</h1>
    </div>
  );
}

export default UseEffectHook;
