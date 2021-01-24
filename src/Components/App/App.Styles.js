import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #293F55;
`;

export const RightItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-basis: 50%;
  width: 100%;
  padding-top: 1.5rem;
  margin-left: 2rem;

  @media only screen and (max-width: 576px) {
    flex-basis: unset;
    padding-left: unset;
    width: unset;
    height: 15vh;
    margin-left: unset;
`;
