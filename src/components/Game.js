import React, { useState, useEffect } from 'react';
import { Content } from '../styled-components/Content';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Gametitle,
  Styledoption,
  Styledselect,
} from '../styled-components/GamePage';

const Game = (props) => {
  const [game, setGame] = useState({});
  const [category, setCategory] = useState('All');
  const categories = [];

  const gameId = props.match.params.gameId;

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/games/${gameId}`)
      .then((res) => setGame(res.data));
  }, [gameId]);

  if (game.id === undefined) {
    return null;
  } else {
    return (
      <Content>
        <Gametitle>{game.title}</Gametitle>
        <Styledselect
          defaultValue={'default'}
          id='selectCategory'
          onChange={changeCategory}
        >
          <Styledoption disabled hidden value='default'>
            Select categories
          </Styledoption>
          <Styledoption>All</Styledoption>
          {game.runs.map((run) => {
            if (run.category in categories) {
              return null;
            }
            categories.push(run.category);
            return <Styledoption key={run.id}>{run.category}</Styledoption>;
          })}
        </Styledselect>
        <Link to='/games'>Back to games</Link>
        {<h2>{category} runs</h2>}
        <ul>
          {game.runs.map((run) => {
            if (category === 'All' || run.category === category) {
              return (
                <li key={run.name}>
                  <Link to={'/games/' + gameId + '/' + run.id}>{run.name}</Link>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </Content>
    );
  }
};

export default Game;
