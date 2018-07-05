import React, {Component} from "react";

import Home from '../../layouts/Home';
import CardPost from './card';

class All extends Component {
  render() {
    return (
      <Home username="">
        <CardPost></CardPost>
      </Home>
    )
  }
}

export default All;