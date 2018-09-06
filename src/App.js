import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridList from './GridList.jsx';
import AppBar from './AppBar.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar></AppBar>
         <h1 className ="App-header">
           Journal App
            <p className = "descritpionPar">A decentralized platform for submitting and download scientific journals and research papers</p>
         </h1> 

      
        <div className="GridList">
         <GridList></GridList>
        </div>
      </div>
    );
  }
}

export default App;
