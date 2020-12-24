import styled from 'styled-components';

export const DefaultSplits = styled.div`
  width: 25vw;
  border: 1px solid black;
`;

export const Split = styled.div`
  font-size: 3vh;
  font-weight: bold;
  font-style: italic;
  color: #755139;
  border: 1px solid black;
  &:hover {
    color: #f2eddf;
    background-color: #755139;
    cursor: pointer;
  }
`;

export const SelectedSplit = styled.div`
  font-size: 3vh;
  font-weight: bold;
  font-style: italic;
  color: #f2eddf;
  background-color: #755139;
`;

export const AreaContainer = styled.div`
  display: flex;

  margin-left: 6vw;
  width: 25vw;
  border: 1px solid black;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

export const RunContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  margin-left: 2vw;
  height: auto;
`;

export const AreaCardStyle = styled.div`
  height: auto;
  width: 25vw;
  border: 1px solid black;
`;

export const AreaName = styled.div`
  width: 25vw;
  font-size: 2.5vh;
  font-weight: bold;
  color: #755139;
  text-align: center;
`;
