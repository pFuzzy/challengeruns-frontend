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
        <Navbutton to='/news'>News</Navbutton>
        <Navbutton to='/forum'>Forum</Navbutton>
      </Navleft>
      <Title to='/'>ChallengeRuns</Title>
      <Navright>
        <Navbutton to='/register'>Register</Navbutton>
        <Navbutton to='/login'>Sign in</Navbutton>
      </Navright>
    </Header>
  );
};

export default Navbar;
