import React, { useState, useEffect } from 'react';
import { Content } from '../styled-components/Content';
import axios from 'axios';
import { BackButton, GameTitle } from '../styled-components/GamePage';
import {
  DefaultSplits,
  Split,
  SelectedSplit,
} from '../styled-components/RunPageStyle';

const Run = (props) => {
  const [run, setRun] = useState({});
  const [selectedSplit, setSelectedSplit] = useState('');
  const runId = props.match.params.runId;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/runs/${runId}`)
      .then((res) => setRun(res.data));
  }, [runId, selectedSplit]);

  const selectSplit = (e) => {
    console.log(e.target.textContent);
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
      </Content>
    );
  }
};

export default Run;
