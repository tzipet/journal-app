import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridList from './GridList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Journal-App</h1>
        </header>
        <div>
         <GridList/>
        </div>
      </div>
    );
  }
}

export default App;
