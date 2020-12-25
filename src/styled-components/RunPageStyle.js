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
  margin-left: 5vw;
  width: 400px;
  border: 1px solid black;
  overflow-x: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RunContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  margin-left: 2vw;
  height: auto;
`;

export const AreaCardStyle = styled.div``;

export const AreaName = styled.div`
  width: 400px;
  font-size: 2.5vh;
  font-weight: bold;
  color: #755139;
  text-align: center;
`;

export const AreaInfo = styled.div``;

export const AreaDetail = styled.div`
  border: 1px solid black;
`;
