import { BrowserRouter as Router } from "react-router-dom";

import React from 'react';
import Post from './post';

const RouterApp = () => {
  return (
    <Router>
      <div>
        <Post />
      </div>
    </Router>
  );
};

export default RouterApp;