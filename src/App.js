import React, { Component } from 'react';
import './App.css';
import FormMovie from './FormMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FormMovie />
        </header>
      </div>
    );
  }
}

export default App;
