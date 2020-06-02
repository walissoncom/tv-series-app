import React, { Component } from 'react';
import Main from '../Main';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-title">TV Series List</h3>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;