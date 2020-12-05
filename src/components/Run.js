import React, { useState, useEffect } from 'react';
import { Content } from '../styled-components/Content';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Run = (props) => {
  const [run, setRun] = useState({});
  const runId = props.match.params.runId;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/runs/${runId}`)
      .then((res) => setRun(res.data));
  }, [runId]);

  if (run.id === undefined) {
    return null;
  } else {
    return (
      <Content>
        <div>{run.name}</div>
        {run.splits.map((split) => (
          <div key={split.id}>{split.name}</div>
        ))}
        <Link to={'/games/' + props.match.params.gameId}>Back to runs</Link>
      </Content>
    );
  }
};

export default Run;
