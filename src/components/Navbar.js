import React from 'react';
import {
  Title,
  Header,
  Navleft,
  Navright,
  Navbutton,
} from '../styled-components/Header';

const Navbar = () => {
  return (
    <Header>
      <Navleft>
        <Navbutton to='/news' draggable={false}>
          News
        </Navbutton>
        <Navbutton to='/forum' draggable={false}>
          Forum
        </Navbutton>
      </Navleft>
      <Title to='/' draggable={false}>
        ChallengeRuns
      </Title>
      <Navright>
        <Navbutton to='/register' draggable={false}>
          Register
        </Navbutton>
        <Navbutton to='/login' draggable={false}>
          Sign in
        </Navbutton>
      </Navright>
    </Header>
  );
};

export default Navbar;
