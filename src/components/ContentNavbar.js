import React from 'react';
import {
  ContentButton,
  SelectedContent,
  StyledContentNav,
} from '../styled-components/Content';

const Contentnavbar = () => {
  const currentUrl = window.location.href.split('/');
  const currentPage = currentUrl[currentUrl.length - 1];

  return (
    <StyledContentNav>
      {currentPage === 'games' ? (
        <SelectedContent>Games</SelectedContent>
      ) : (
        <ContentButton to='games' draggable={false}>
          Games
        </ContentButton>
      )}
      {currentPage === 'categories' ? (
        <SelectedContent>Categories</SelectedContent>
      ) : (
        <ContentButton to='categories' draggable={false}>
          Categories
        </ContentButton>
      )}
      {currentPage === 'leaderboards' ? (
        <SelectedContent>Leaderboards</SelectedContent>
      ) : (
        <ContentButton to='leaderboards' draggable={false}>
          Leaderboards
        </ContentButton>
      )}
    </StyledContentNav>
  );
};
export default Contentnavbar;
