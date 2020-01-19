import React from 'react';
import logo from './logo.svg';
import Foyer from './pages/Foyer';
import MansionHalls from './pages/MansionHalls';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    this.state = {};
    return (
      <Router>
        <Route exact path='/' component={Foyer} />
        <Route exact path='/halls' component={MansionHalls} />
      </Router>
    );
  }
}

export default App;
