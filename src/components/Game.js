import React, { useState, useEffect } from 'react';
import { Content } from '../styled-components/Content';
import axios from 'axios';
import Gamenavbar from './Gamenavbar';

const Game = (props) => {
  const [game, setGame] = useState({});
  const gameId = props.match.params.id;

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
        <Gamenavbar gametitle={game.title} runs={game.runs} />
      </Content>
    );
  }
};

export default Game;
