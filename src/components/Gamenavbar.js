import React from 'react';
import { Link } from 'react-router-dom';
import { Gametitle, Styledgamenav } from '../styled-components/GamePage';

const Gamenavbar = (props) => {
  return (
    <Styledgamenav>
      <Gametitle>{props.gametitle}</Gametitle>
      <Link to='/games'>Back to games</Link>
    </Styledgamenav>
  );
};
export default Gamenavbar;
