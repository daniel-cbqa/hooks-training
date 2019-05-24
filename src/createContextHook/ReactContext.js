import React, { createContext, useState, useContext } from "react";
const NameContext = createContext();

function ReactContext() {
  const [name, setName] = useState("Daniel Enríquez");
  return (
    <NameContext.Provider value={name}>
      <Child />
    </NameContext.Provider>
  );
}

function Child() {
  return (
    <section className="child">
      <Grandchild />
    </section>
  );
}

function Grandchild() {
  return (
    <div className="grandchild">
      <Button />
    </div>
  );
}

function Button() {
  const name = useContext(NameContext);
  return <button>{name}</button>;
}

export default ReactContext;
