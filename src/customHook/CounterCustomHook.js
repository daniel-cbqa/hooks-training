import React, { useState } from "react";

function useCounter(startingCount, number) {
  const [count, setCount] = useState(startingCount);
  const handleIncrease = () => setCount(count + number);
  const handleDecrease = () => setCount(count - number);
  return {
    count,
    handleIncrease,
    handleDecrease
  };
}

function Display(props) {
  const { count, handleIncrease, handleDecrease } = useCounter(
    props.count,
    props.number
  );
  return (
    <div>
      <br />
      <button onClick={handleIncrease}>Increase</button>&nbsp;&nbsp;
      <button onClick={handleDecrease}>Decrease</button>&nbsp;&nbsp;
      <h1>{count}</h1>
    </div>
  );
}

function FancyDisplay(props) {
  const { count, handleIncrease, handleDecrease } = useCounter(
    props.count,
    props.number
  );
  return (
    <section>
      <button onClick={handleIncrease}>Increase</button>&nbsp;&nbsp;
      <button onClick={handleDecrease}>Decrease</button>&nbsp;&nbsp;
      <h2>{count}</h2>
    </section>
  );
}

function CounterCustomHook() {
  return (
    <div>
      <Display count={10} number={2} />
      <FancyDisplay count={30} number={3} />
    </div>
  );
}

export default CounterCustomHook;
