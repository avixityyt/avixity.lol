import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  border-radius: 5px;
  padding: 5px;
  justify-self: center;

  img {
    border-radius: 3px;
    height: auto;
    transform: scale(75%);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(85%);
      border: 3px solid white;
    }
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: white;
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .stackTitle {
    font-weight: 500;
    margin-right: 10px;
    font-size: 17px;
    color:white;
  }

  .tags {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
