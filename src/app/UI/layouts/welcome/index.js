import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

import { Hero, HeroBody, HeroHead} from '../../components/Hero';
import Header from '../../components/Header';
import { Menu, Item } from "../../components/Menu";
import Footer from '../../components/Footer';

const LayoutWelcome = ({ children }) => {
  return (
    <Hero isPrimary size="lg" isBold>
      <HeroHead>
        <Header isPrimary hrefBrand="/welcome">
          <Menu putAt="end">
            <Item>
              <Link to="/signin">Log in</Link>
            </Item>
            <Item>
              <Link to="/signup" className="button is-primary is-inverted">Register</Link>
            </Item>
          </Menu>
        </Header>
      </HeroHead>
      <HeroBody>
        {children}
      </HeroBody>
    </Hero>
  );
};

export default LayoutWelcome;