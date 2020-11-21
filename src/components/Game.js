import React, { useState, useEffect } from 'react';
import { Content } from '../styled-components/Content';
import axios from 'axios';

const Game = (props) => {
  const [category, setCategory] = useState('');
  const [game, setGame] = useState({});
  const gameId = props.match.params.id;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/games/${gameId}`)
      .then((res) => setGame(res.data));
  }, [gameId, category]);

  const changeCategory = (e) => {
    setCategory(e.target.id);
  };

  if (game.id === undefined) {
    return <div></div>;
  } else {
    return (
      <Content>
        <div>{game.title}</div>
        <div onClick={changeCategory} id='NO_HIT'>
          No hit
        </div>
        <div onClick={changeCategory} id='NO_DAMAGE'>
          No damage
        </div>
        {game.runs.map((run) => {
          if (run.category === category) {
            return <div id={run.id}>{run.name}</div>;
          } else {
            return null;
          }
        })}
      </Content>
    );
  }
};

export default Game;
