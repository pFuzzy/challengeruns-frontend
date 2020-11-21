import React, { useState, useEffect } from 'react';
import { Content, Gamelink } from '../styled-components/Content';
import Contentnavbar from './Contentnavbar';
import axios from 'axios';

const Games = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/games').then((res) => {
      setGames(res.data);
    });
  }, []);

  return (
    <Content>
      <Contentnavbar />
      {games.map((game) => {
        return (
          <Gamelink key={game.id} to={'/games/' + game.id}>
            {game.title}
          </Gamelink>
        );
      })}
    </Content>
  );
};

export default Games;
