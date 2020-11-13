import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 20vh;
  background-color: #755139;
`;

export const Title = styled(Link)`
  text-decoration: none;
  position: absolute;
  margin-top: 5vh;
  left: 35.5vw;
  width: 29vw;
  height: 70px;
  text-align: center;
  font-size: 10vh;
  font-style: italic;
  font-weight: bold;
  color: #f2eddf;
  &:hover {
    color: #a27b60;
  }
`;

export const Navleft = styled.div`
  position: absolute;
  width: 20vw;
  display: flex;
`;

export const Navright = styled.div`
  position: absolute;
  right: 0;
  width: 20vw;
  height: 20vh;
  display: flex;
`;

export const Navbutton = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 4vh;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  width: 7vw;
  height: 35px;
  margin-top: 8vh;
  font-style: italic;
  font-weight: bold;
  color: #f2eddf;
  &:hover {
    color: #a27b60;
  }
`;
