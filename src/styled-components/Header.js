import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 20vh;
  background-color: #755139;
`;

export const Title = styled.div`
  position: absolute;
  left: 20vw;
  width: 60vw;
  height: 15vh;
  padding-top: 5vh;
  text-align: center;
  font-size: 70px;
  font-style: italic;
  font-weight: bold;
  color: #f2eddf;
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

export const Navbutton = styled.div`
  text-align: center;
  font-size: 35px;
  width: 20vw;
  height: 12vh;
  padding-top: 8vh;
  font-style: italic;
  font-weight: bold;
  color: #f2eddf;
`;
