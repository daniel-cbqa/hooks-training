import React, { useState, useEffect } from "react";

function useKeyPress(startingValue) {
  const [userText, setUserText] = useState(startingValue);

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
  return userText;
}

function CustomHook() {
  const userText = useKeyPress("Once upon a time");
  return (
    <div>
      <h1>Feel free to type! Your text will show up below</h1>
      <blockquote>{userText}</blockquote>
    </div>
  );
}

export default CustomHook;
