import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Component1/>
        <Component2/>
        <Component3/>
      </div>
    );
  }
}

export default App;
