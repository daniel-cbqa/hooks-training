import React, { useState } from "react";
//import StatelessComponent from "./StatelessComponent";
//import ClassBasedComponent from "./ClassBasedComponent";

function App() {
  const [variable, setVariable] = useState(false);
  const text = variable ? "Active" : "Inactive";

  const handleOnClick = () => setVariable(!variable);

  return <button onClick={handleOnClick}>{text}</button>;
  //stateless functional component
  //return <StatelessComponent />;
  //class based component
  //return <ClassBasedComponent />;
}

export default App;
