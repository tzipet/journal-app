import React, { Component } from 'react';
import './App.css'; 
import AppBar from './AppBar.jsx';
import Home from './home/index.jsx';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import paperDetails from './paperDetails/paperDetails.jsx';



class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
    
      <AppBar></AppBar>
        
          <div>      
            <Switch>
               <Route exact path = "/" component = {Home}/>
               <Route  path='/paper' component={ paperDetails }/>
               <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div> 

      </div>
    </Router>  

    );
  }
}

export default App;
