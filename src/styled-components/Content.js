import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  position: absolute;
  top: 20vh;
  left: 20vw;
  width: 60vw;
  height: 80vh;
`;

export const StyledContentNav = styled.div`
  display: flex;
  width: 60vw;
  height: 5vh;
`;

export const ContentButton = styled(Link)`
  text-decoration: none;
  width: 20vw;
  height: 5vh;
  text-align: center;
  color: #755139;
  font-size: 4vh;
  border: 1px solid #755139;
  &:hover {
    background-color: #755139;
    color: #f2eddf;
  }
`;

export const SelectedContent = styled.div`
  text-decoration: none;
  width: 20vw;
  height: 5vh;
  text-align: center;
  color: #f2eddf;
  background-color: #755139;
  font-size: 4vh;
  border: 1px solid #755139;
`;

export const GameLink = styled(Link)`
  display: inline-block;
  width: 15vw;
  height: 5.5vw;
  text-align: center;
  font-size: 3vh;
  padding-top: 3vw;
  text-decoration: none;
  color: black;
  &:hover {
    background: grey;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 60vw;
  font-size: 3vh;
`;
