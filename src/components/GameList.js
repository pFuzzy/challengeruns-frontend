import React, { useState, useEffect } from 'react';
import { Content, GameLink } from '../styled-components/Content';
import ContentNavbar from './ContentNavbar';
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
      <ContentNavbar />
      {games.map((game) => {
        return (
          <GameLink draggable='false' key={game.id} to={'/games/' + game.id}>
            {game.title}
          </GameLink>
        );
      })}
    </Content>
  );
};

export default Games;
