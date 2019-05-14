import React from "react";

function Box(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

function StatelessComponent() {
  return <Box text="Hi, Daniel" subtitle="I love react" />;
}

export default StatelessComponent;
