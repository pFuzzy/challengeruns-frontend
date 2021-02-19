import React, { useState, useEffect } from 'react';
import { Content } from '../styled-components/ContentStyle';
import axios from 'axios';
import { BackButton, GameTitle } from '../styled-components/GamePageStyle';
import {
  DefaultSplits,
  Split,
  SelectedSplit,
  AreaContainer,
  RunContainer,
} from '../styled-components/RunPageStyle';
import AreaCard from './AreaCard';

const Run = (props) => {
  const [run, setRun] = useState({});
  const [selectedSplit, setSelectedSplit] = useState('');
  const [areas, setAreas] = useState([]);
  const runId = props.match.params.runId;
  let page = 0;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/runs/${runId}`)
      .then((res) => setRun(res.data));
  }, [runId, selectedSplit]);

  const selectSplit = (e) => {
    for (let split of run.splits) {
      if (split.name === e.target.textContent) {
        setAreas(split.areas);
      }
    }
    document.querySelector('.areaContainer').scrollTo(0, 0);
    setSelectedSplit(e.target.textContent);
  };

  if (run.id === undefined) {
    return null;
  } else {
    return (
      <Content>
        <GameTitle>{run.name}</GameTitle>
        <BackButton to={'/games/' + props.match.params.gameId}>
          Back to runs
        </BackButton>
        <RunContainer>
          <DefaultSplits>
            {run.splits.map((split) =>
              split.name === selectedSplit ? (
                <SelectedSplit key={split.id}>{split.name}</SelectedSplit>
              ) : (
                <Split onClick={selectSplit} key={split.id}>
                  {split.name}
                </Split>
              )
            )}
          </DefaultSplits>

          <AreaContainer className='areaContainer'>
            {areas.map((area) => {
              page += 1;
              return (
                <AreaCard
                  key={area.id}
                  area={area}
                  pages={areas.length}
                  page={page}
                />
              );
            })}
          </AreaContainer>
        </RunContainer>
      </Content>
    );
  }
};

export default Run;
