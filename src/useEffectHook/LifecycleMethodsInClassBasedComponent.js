import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount runs after the first render ");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate runs afert any subsequent render ");
  }

  componentWillUnmount(prevProps, prevState) {
    console.log("ComponentWillUnmount runs ");
  }

  render() {
    console.log("I'm rendering!");
    const { count } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increase
        </button>
        <button onClick={() => this.setState({ count: count - 1 })}>
          Decrease
        </button>
        <h1>{count}</h1>
      </div>
    );
  }
}

class LifecycleMethodsInClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount runs after the first render ");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate runs afert any subsequent render ");
  }

  componentWillUnmount() {
    console.log(
      "ComponentWillUnmount runs before the component will be removed from view"
    );
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ visible: !visible })}>
          Show / Hide the Counter Component
        </button>

        {visible && <Count />}
      </div>
    );
  }
}

export default LifecycleMethodsInClassBasedComponent;
