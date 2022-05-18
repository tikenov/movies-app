import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  onInc() {
    this.setState((prevState) => ({
      value: prevState.value + 1
    }))
  }
  onDec() {
    this.setState((prevState) => ({
      value: prevState.value - 1
    }))
  }

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={() => this.onInc()}>+</button>
        <button onClick={() => this.onDec()}>-</button>
      </div>
    );
  }
}

export default Counter;