import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>  
        <Counter />
      </div>
    );
  }
}

class Counter extends React.Component {

  constructor() {
    super();
    this.state = {
      count : 0
    }
  }

  changeCount = (operation) => {
    if(operation == "+"){
      this.setState({ count : this.state.count + 1 })
    }
    if(operation == "-"){
      this.setState({ count : this.state.count - 1 })
    }
  }

  render() {
    return (
      <div>
        <div>{ this.state.count }</div>
        <button onClick={() => this.changeCount("+")} >increase</button>
        <button onClick={() => this.changeCount("-")} >decrease</button>
      </div>
    );
  }
}

export default App;
