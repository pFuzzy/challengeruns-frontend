import React from 'react';
import {
  Content,
  Contentnav,
  Contentbutton,
} from '../styled-components/Content';

const Mainpage = () => {
  return (
    <Content>
      <Contentnav>
        <Contentbutton to='/games'>Games</Contentbutton>
        <Contentbutton to='/categories'>Categories</Contentbutton>
        <Contentbutton to='/leaderboards'>Leaderboards</Contentbutton>
      </Contentnav>
    </Content>
  );
};
export default Mainpage;
