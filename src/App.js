import React, { Component } from 'react';
import Counter from './Counter';
import ClickCounter from './ClickCounter';

class App extends Component {
  state = {
    count: 0
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} increment={this.increment} decrement={this.decrement} />
        <ClickCounter count={this.state.count} increment={this.increment} />
      </div>
    );

  }
}

export default App;