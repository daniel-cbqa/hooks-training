import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("salmon");
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleColor = () => {
    const nextColor = color === "salmon" ? "gold" : "salmon";
    setColor(nextColor);
  };

  useEffect(() => {
    console.log(`Inside the useEffect function. Count is ${count}`);
    //Returning a function will be excecuted after the first time that the useEffect is called and its executed before the useEffect executes itself
    return () => {
      console.log(
        `I'm removing anything that was setup above! The last count was ${count}.`
      );
    };
  }, []); //the second parameter of useEffect is an array of the variables that react will track, so when it changes the useEffect function enters

  return (
    <div>
      <br />
      <button onClick={handleIncrease}>Increase</button>&nbsp;&nbsp;
      <button onClick={handleDecrease}>Decrease</button>&nbsp;&nbsp;
      <button onClick={handleColor}>Change color</button>&nbsp;&nbsp;
      <h1 style={{ color }}>{count}</h1>
    </div>
  );
}

function UseEffectHook() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Show / Hide</button>
      {visible && <Counter />}
    </div>
  );
}

export default UseEffectHook;
