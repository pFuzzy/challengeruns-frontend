import React, { useState, useEffect } from 'react';
import { Content, Footer } from '../styled-components/Content';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  BackButton,
  GameTitle,
  StyledOption,
  StyledSelect,
  RunListHeader,
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
  }, [gameId, category]);

  if (game.id === undefined) {
    return null;
  } else {
    return (
      <Content>
        <GameTitle>{game.title}</GameTitle>
        <StyledSelect
          defaultValue={'default'}
          id='selectCategory'
          onChange={changeCategory}
        >
          <StyledOption disabled hidden value='default'>
            Select categories
          </StyledOption>
          <StyledOption>All</StyledOption>
          {game.runs.map((run) => {
            if (categories.includes(run.category)) {
              return null;
            }
            categories.push(run.category);
            return (
              <StyledOption key={'runId:' + run.id}>
                {run.category}
              </StyledOption>
            );
          })}
        </StyledSelect>
        <BackButton to='/games'>Back to games</BackButton>
        <RunListHeader>{category} runs</RunListHeader>
        <ul>
          {game.runs.map((run) => {
            if (category === 'All' || run.category === category) {
              return (
                <li key={run.id}>
                  <Link to={'/games/' + gameId + '/' + run.id}>
                    {category !== 'All' && run.category === category
                      ? run.name
                      : run.category + ' ' + run.name}
                  </Link>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <Footer>Suggest a run here!</Footer>
      </Content>
    );
  }
};

export default Game;
