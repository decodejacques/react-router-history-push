import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, withRouter, Route } from 'react-router-dom'
import './App.css';

let users = [
  { name: "Robert", height: 180 },
  { name: "susan", height: 165 }
]

var renderUser = info => {
  let userID = info.match.params.uid;
  let user = users[userID];
  return (<div>
    {user.name} is {user.height}cm tall
    </div>);
}

class ContentTemplate extends Component {
  makeButton = (user, userID) => {
    return (<button
      onClick={() =>
        this.props.history.push('/user/' + userID) // THIS IS THE KEY LINE
      }>
      {user.name}
    </button>)
  }
  render() {
    return (
      <div>
        {users.map((user, userID) => this.makeButton(user, userID))}
        <Route path='/user/:uid' render={renderUser}></Route>
      </div>
    );
  }
}

// Looking at App.js,
// history is never passed as a prop, so why is this.props.history defined?
// Answer: this.props.history is NOT defined in ContentTemplate
// Solution: You have to create a NEW component with withRouter
// That's right, withRouter is a function that takes a component as an argument
// and returns a component

let Content = withRouter(ContentTemplate);  

export default Content; // You DO NOT export ContentTemplate
