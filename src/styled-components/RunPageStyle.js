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

export const AreaHeader = styled.div`
  width: 400px;
  font-size: 2.5vh;
  display: table;
  font-weight: bold;
  color: #f2eddf;
  background-color: #755139;
  text-align: center;
`;

export const AreaInfo = styled.div`
  width: 100%;
  display: flex;
  background-color: #a27b60;
  flex-wrap: wrap;
`;

export const AreaDetail = styled.div`
  width: 180px;
  font-size: 2vh;
  padding: 10px;
`;

export const AreaTips = styled.div`
  width: 100%;
  font-size: 2vh;
  padding: 10px;
`;

export const PreviousButton = styled.div`
  display: table-cell;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const NextButton = styled.div`
  display: table-cell;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;
