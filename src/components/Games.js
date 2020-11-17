import React, { useState, useEffect } from 'react';
import { Content } from '../styled-components/Content';
import Contentnavbar from './Contentnavbar';
import axios from 'axios';

const Games = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/games').then((res) => {
      setGames(res.data);
    });
  }, []);
  console.log(games);
  return (
    <Content>
      <Contentnavbar />
      {games.map((game) => {
        return <div>{game.title}</div>;
      })}
    </Content>
  );
};

export default Games;
