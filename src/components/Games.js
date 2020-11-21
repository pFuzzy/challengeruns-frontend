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

  const generateUrlFromGameTitle = (title) => {
    const splitTitle = title.toLowerCase().split(' ');
    return 'games/' + splitTitle.join('-');
  };

  console.log(games);
  return (
    <Content>
      <Contentnavbar />
      {games.map((game) => {
        return (
          <Gamelink to={generateUrlFromGameTitle(game.title)}>
            {game.title}
          </Gamelink>
        );
      })}
    </Content>
  );
};

export default Games;
