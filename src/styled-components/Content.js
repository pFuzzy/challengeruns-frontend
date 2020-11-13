import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 20vh;
  left: 20vw;
  width: 50vw;
  height: 80vh;
`;

export const Contentnav = styled.div`
  display: flex;
  width: 60vw;
  height: 5vh;
`;

export const Contentbutton = styled.div`
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
