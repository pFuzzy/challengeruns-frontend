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
        <Contentbutton>Games</Contentbutton>
        <Contentbutton>Categories</Contentbutton>
        <Contentbutton>Leaderboards</Contentbutton>
      </Contentnav>
    </Content>
  );
};
export default Mainpage;
