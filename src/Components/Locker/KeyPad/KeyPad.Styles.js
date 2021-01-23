import styled from 'styled-components';

export const KeyPadGrid = styled.div`
  //width: 60vw;
  //height: 30vw;
  flex-basis: 40%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0.4rem;
  background-color: #666666;
  border: #666666 1.5rem solid;
  outline: .5rem solid black;
`;

export const KeyWrapper = styled.div`
  //min-width: 10vw;
  //min-height: 5vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75rem;
`;

export const KeyPadWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: center;
  align-items: center;
`;
