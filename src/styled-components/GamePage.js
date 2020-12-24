import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSelect = styled.select`
  background-color: #f2eddf;
  border-color: #755139;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  font-size: 2.5vh;
  font-weight: bold;
  margin-left: 1vw;
  margin-top: 1vh;
  color: #755139;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

export const StyledOption = styled.option``;

export const RunListHeader = styled.h1`
  text-align: center;
  color: #755139;
  font-size: 4vh;
`;

export const BackButton = styled(Link)`
  position: absolute;
  font-size: 3vh;
  font-weight: bold;
  right: 1vw;
  color: #755139;
  text-decoration: none;
`;

export const GameTitle = styled.div`
  width: 59.85vw;
  height: 8vh;
  text-align: center;
  padding-top: 1vh;
  color: #755139;
  font-size: 6vh;
  font-weight: bold;
  border: 1px solid #755139;
`;
