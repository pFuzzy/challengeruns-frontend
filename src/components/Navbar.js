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
        <Navbutton>News</Navbutton>
        <Navbutton>Forum</Navbutton>
      </Navleft>
      <Title>ChallengeRuns</Title>
      <Navright>
        <Navbutton>Register</Navbutton>
        <Navbutton>Sign in</Navbutton>
      </Navright>
    </Header>
  );
};

export default Navbar;
