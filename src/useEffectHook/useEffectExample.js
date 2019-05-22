import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [userText, setUserText] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  const handleUserKeyPress = event => {
    const { key, keyCode } = event;
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
  };

  return (
    <div>
      <h1>Feel free to type! Your text will show up below</h1>
      <blockquote>{userText}</blockquote>
    </div>
  );
}

export default UseEffectExample;
