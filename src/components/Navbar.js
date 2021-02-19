import React from 'react';
import { useCookies } from 'react-cookie';
import {
  Title,
  Header,
  NavLeft,
  NavRight,
  NavButton,
} from '../styled-components/Header';

const Navbar = () => {
  const [cookies] = useCookies(['username', 'token']);

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
        {cookies.username && cookies.username !== 'undefined' ? (
          <NavButton to='/profile' draggable={false}>
            {cookies.username}
          </NavButton>
        ) : (
          <NavButton to='/register' draggable={false}>
            Register
          </NavButton>
        )}
        {cookies.username && cookies.username !== 'undefined' ? (
          <NavButton to='/logout' draggable={false}>
            Log out
          </NavButton>
        ) : (
          <NavButton to='/login' draggable={false}>
            Log in
          </NavButton>
        )}
      </NavRight>
    </Header>
  );
};

export default Navbar;
