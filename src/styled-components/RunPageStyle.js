import styled from 'styled-components';

export const DefaultSplits = styled.div`
  width: 40%;
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
  width: 40%;
  margin-left: 15%;
  border: 1px solid black;
`;

export const RunContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  margin-left: 2vw;
`;
