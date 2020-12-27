import React from 'react';
import {
  Title,
  Header,
  NavLeft,
  NavRight,
  NavButton,
} from '../styled-components/Header';

const Navbar = () => {
  return (
    <Header>
      <NavLeft>
        <NavButton to='/news' draggable={false}>
          News
        </NavButton>
        <NavButton to='/forum' draggable={false}>
          Forum
        </NavButton>
      </NavLeft>
      <Title to='/' draggable={false}>
        ChallengeRuns
      </Title>
      <NavRight>
        <NavButton to='/register' draggable={false}>
          Register
        </NavButton>
        <NavButton to='/login' draggable={false}>
          Sign in
        </NavButton>
      </NavRight>
    </Header>
  );
};

export default Navbar;
