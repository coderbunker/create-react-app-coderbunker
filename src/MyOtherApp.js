import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Another React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/MyOtherApp.js</code> and save to
          reload.
        </p>
      </div>
    );
  }
}

export default MyApp;
