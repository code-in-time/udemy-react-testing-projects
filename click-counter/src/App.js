import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    };
  }

  decrement = () => {
    this.setState((prev) => {

      if (this.state.counter === 0) {
        return { counter: 0, error: true }
      }

      return { counter: this.state.counter - 1 }

    })
  }

  render() {
    return (
      <div data-test="component-app">

      {this.state.error && <div data-test="error-text" className="App-error-text">the counter can't go below zero</div>}

      <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
      <button
        data-test="increment-button"
        onClick={() => this.setState({ counter: this.state.counter + 1, error: false })}
        >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => this.decrement()}
        >
        Decrement counter
      </button>
      </div>
    );
  }
}

export default App;
