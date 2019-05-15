import React, { Component } from "react";

export default class CounterClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increase</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
