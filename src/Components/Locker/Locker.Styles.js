import styled from 'styled-components';

export const LockerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  height: 30vw;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    height: 95vh;
  }
`;
