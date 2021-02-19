import React, { useState, useEffect } from 'react';
import { Content, Footer, GameLink } from '../styled-components/ContentStyle';
import ContentNavbar from './ContentNavbar';
import { getWithoutToken } from '../service/DataFetcher';

const Games = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getWithoutToken('games', setGames);
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
      <Footer>Suggest a game here!</Footer>
    </Content>
  );
};

export default Games;
