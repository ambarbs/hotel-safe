import styled from 'styled-components';

export const DisplayPanelWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #9EA18B;
  border-radius: 1rem;
  border: black solid 0.5rem;
  width: 100%;
  height: 35%;
  margin-bottom: 6rem;
  font-size: 4rem;
`;

export const DisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Indicator = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: black 0.25rem solid;
  background-color: ${({ bgColor }) => bgColor};
`;
