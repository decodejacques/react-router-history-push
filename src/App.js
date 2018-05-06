import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, withRouter, Route } from 'react-router-dom'
import './App.css';
import Content from './Content'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
