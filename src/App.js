import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Header } from './header';
import { PAGES } from './models/pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {PAGES.map(({ index, route, component }) => (
            <Route key={index} exact path={route} component={component} />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
