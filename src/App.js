import React, { Component } from 'react';
import {
  HashRouter  as Router,
  Route
} from "react-router-dom";


import  Home from './page/Home';
import List from './page/List';
import About from './page/About'
import  './config';
// import 'antd-mobile/dist/antd-mobile.css';
import   './App.css';

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
      
      <Route exact path="/" component={Home} />
      <Route path = "/List"component = { List } />
      <Route path="/about" component={About} />

      </div>
           </Router>
    );
  }
}

export default App;
