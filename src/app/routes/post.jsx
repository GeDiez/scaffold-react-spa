import React, { Fragment } from 'react';
import { Route } from 'react-router';

import All from "../scenes/posts/all";

const Post = () => (
  <Fragment>
    <Route path="/posts/show/:id"></Route>
    <Route path="/posts/edit/:id"></Route>
    <Route path="/posts/new"></Route>
    <Route path="/posts" component={All}></Route>
  </Fragment>
);

export default Post;
