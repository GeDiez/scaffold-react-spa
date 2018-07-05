import React, {Fragment} from 'react';

import Header from '../../UI/Header';
import Footer from '../../UI/Footer';

const Home = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
        {children}
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;