import React from 'react';
import {
  Contentbutton,
  Contentnav,
  Selectedcontent,
} from '../styled-components/Content';

const Contentnavbar = () => {
  const currentUrl = window.location.href.split('/');
  const currentPage = currentUrl[currentUrl.length - 1];

  return (
    <Contentnav>
      {currentPage === 'games' ? (
        <Selectedcontent>Games</Selectedcontent>
      ) : (
        <Contentbutton to='games' draggable={false}>
          Games
        </Contentbutton>
      )}
      {currentPage === 'categories' ? (
        <Selectedcontent>Categories</Selectedcontent>
      ) : (
        <Contentbutton to='categories' draggable={false}>
          Categories
        </Contentbutton>
      )}
      {currentPage === 'leaderboards' ? (
        <Selectedcontent>Leaderboards</Selectedcontent>
      ) : (
        <Contentbutton to='leaderboards' draggable={false}>
          Leaderboards
        </Contentbutton>
      )}
    </Contentnav>
  );
};
export default Contentnavbar;
