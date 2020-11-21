import React, { useState, useEffect } from 'react';
import { Content } from '../styled-components/Content';
import axios from 'axios';
import Run from './Run';
import {
  Categorychoice,
  Categorypick,
  Gametitle,
} from '../styled-components/GamePage';

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
        <Gametitle>{game.title}</Gametitle>
        <Categorypick>
          <Categorychoice onClick={changeCategory} id='NO_HIT'>
            NO HIT
          </Categorychoice>
          <Categorychoice onClick={changeCategory} id='NO_DAMAGE'>
            NO DAMAGE
          </Categorychoice>
        </Categorypick>

        {game.runs.map((run) => {
          if (run.category === category) {
            return <Run run={run} />;
          } else {
            return null;
          }
        })}
      </Content>
    );
  }
};

export default Game;
