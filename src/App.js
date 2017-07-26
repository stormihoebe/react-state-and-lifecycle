import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goodbye from './Goodbye';
import Clock from './Clock';
import Greeting from './Greeting';

//props ={
// name: "Stormi"
//}

class App extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock/>
          <Greeting/>

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
