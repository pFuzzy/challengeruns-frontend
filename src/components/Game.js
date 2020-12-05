import React, { useState, useEffect } from 'react';
import { Content } from '../styled-components/Content';
import axios from 'axios';
import Gamenavbar from './Gamenavbar';
import { Link } from 'react-router-dom';

const Game = (props) => {
  const [game, setGame] = useState({});
  const [category, setCategory] = useState('All');

  const gameId = props.match.params.gameId;

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
        <Gamenavbar
          gametitle={game.title}
          runs={game.runs}
          setCategory={setCategory}
        />
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
