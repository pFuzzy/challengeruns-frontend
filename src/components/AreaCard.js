import React from 'react';
import {
  AreaCardStyle,
  AreaDetail,
  AreaInfo,
  AreaTips,
  AreaHeader,
  PreviousButton,
  NextButton,
} from '../styled-components/RunPageStyle';

const AreaCard = (props) => {
  const area = props.area;

  let previous = '<<';
  let next = '>>';

  const scrollLeft = (e) => {
    document.querySelector('.areaContainer').scrollLeft -= 400;
  };
  const scrollRight = (e) => {
    document.querySelector('.areaContainer').scrollLeft += 400;
  };
  return (
    <AreaCardStyle>
      <AreaHeader>
        {props.page > 1 ? (
          <PreviousButton onClick={scrollLeft}>{previous}</PreviousButton>
        ) : null}

        {area.name}
        {props.page < props.pages ? (
          <NextButton onClick={scrollRight}>{next}</NextButton>
        ) : null}
      </AreaHeader>
      <AreaInfo>
        {area.acquiredLevels.length > 0 ? (
          <AreaDetail>
            <strong>Levels to get</strong>
            {area.acquiredLevels.map((level) => {
              return <div key={level + area.id}>{level}</div>;
            })}
          </AreaDetail>
        ) : null}

        {area.pickUps.length > 0 ? (
          <AreaDetail>
            <strong>Items to pick up</strong>
            {area.pickUps.map((pickUp) => {
              return <div key={pickUp + area.id}>{pickUp}</div>;
            })}
          </AreaDetail>
        ) : null}
        {area.upgrades.length > 0 ? (
          <AreaDetail>
            <strong>Item upgrade</strong>
            {area.upgrades.map((upgrade) => {
              return <div key={upgrade + area.id}>{upgrade}</div>;
            })}
          </AreaDetail>
        ) : null}
        {area.enemies.length > 0 ? (
          <AreaDetail>
            <strong>Enemies to kill</strong>
            {area.enemies.map((enemy) => {
              return <div key={enemy + area.id}>{enemy}</div>;
            })}
          </AreaDetail>
        ) : null}
        {area.tips.length > 0 ? (
          <AreaTips>
            <strong>Tips</strong>
            {area.tips.map((tip) => {
              return <div key={tip + area.id}>{tip}</div>;
            })}
          </AreaTips>
        ) : null}
      </AreaInfo>
    </AreaCardStyle>
  );
};

export default AreaCard;
