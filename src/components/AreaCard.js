import React from 'react';
import {
  AreaCardStyle,
  AreaDetail,
  AreaInfo,
  AreaName,
} from '../styled-components/RunPageStyle';

const AreaCard = (props) => {
  return (
    <AreaCardStyle>
      <AreaName>{props.area.name}</AreaName>
      <AreaInfo>
        {props.area.acquiredLevels.length > 0 ? (
          <AreaDetail>
            Levels to get
            {props.area.acquiredLevels.map((level) => {
              return <div>{level}</div>;
            })}
          </AreaDetail>
        ) : null}

        {props.area.pickUps.length > 0 ? (
          <AreaDetail>
            Items to pick up
            {props.area.pickUps.map((level) => {
              return <div>{level}</div>;
            })}
          </AreaDetail>
        ) : null}
        {props.area.upgrades.length > 0 ? (
          <AreaDetail>
            Item upgrade
            {props.area.upgrades.map((level) => {
              return <div>{level}</div>;
            })}
          </AreaDetail>
        ) : null}
        {props.area.enemies.length > 0 ? (
          <AreaDetail>
            Enemies to kill
            {props.area.enemies.map((level) => {
              return <div>{level}</div>;
            })}
          </AreaDetail>
        ) : null}
        {props.area.tips.length > 0 ? (
          <AreaDetail>
            Tips
            {props.area.tips.map((level) => {
              return <div>{level}</div>;
            })}
          </AreaDetail>
        ) : null}
      </AreaInfo>
    </AreaCardStyle>
  );
};

export default AreaCard;
