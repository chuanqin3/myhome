import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Bio from './Bio'
import Projects from './Projects'

class App extends Component {
  render() {
    return (
      <div class="ui vertical center aligned segment">
        <div class="ui text container">
          <h1 class="ui header">
            Chuan Qin
          </h1>
          <h2>
            Fullstack Financial Analyst
          </h2>
        </div>
        <Router>
          <div>
            <div class="ui center aligned">
              <NavBar />
            </div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/bio' component={Bio}/>
            <Route exact path='/projects' component={Projects}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
