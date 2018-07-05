import React, { Component } from 'react';

import RouterApp from "./app/routes";

import 'bulma/css/bulma.css';

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
