import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

import { Hero, HeroBody, HeroHead} from '../../components/Hero';
import Header from '../../components/Header';
import { Menu, Item } from "../../components/Menu";
import Button from "../../components/Button";
import Footer from '../../components/Footer';

const LayoutWelcome = ({ children, handleLogout }) => {
  return (
    <Hero isLight size="lg" isBold>
      <HeroHead>
        <Header hrefBrand="/welcome">
          <Menu putAt="end" isBold>
            <Item>
              <Button isPrimary isBold onClick={handleLogout}>Log out</Button>
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