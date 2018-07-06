import React, { Component } from 'react';

import RouterApp from "./app/routes";

import './styles.css';

class App extends Component {
  authUser() {
    return true;
  }

  render() {
    return (
      <RouterApp />
    );
  }
}

export default App;
