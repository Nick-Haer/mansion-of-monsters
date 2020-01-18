import React from 'react';
import logo from './logo.svg';
import Foyer from './pages/Foyer';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    this.state = {};
    return (
      <Router>
        <Route exact path='/' component={Foyer} />
      </Router>
    );
  }
}

export default App;
