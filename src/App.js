import React, { Component } from 'react';
import { Header } from './header';
import { Home } from './home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
