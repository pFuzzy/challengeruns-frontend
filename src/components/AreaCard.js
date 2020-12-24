import React from 'react';
import { AreaCardStyle, AreaName } from '../styled-components/RunPageStyle';

const AreaCard = (props) => {
  console.log(props.area);

  return (
    <AreaCardStyle>
      <AreaName>{props.area.name}</AreaName>
      <div>Levels to get</div>
      <div>Enemies to kill</div>
      <div>Items to pick up</div>
      <div>Item upgrades</div>
      <div>Extra tips</div>
    </AreaCardStyle>
  );
};

export default AreaCard;
