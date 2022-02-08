import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: center;
  border-radius: 5px;
  background: var(--pink);
  @media (max-width: 1115px) {
    width: 80%;
    margin: 1rem;
  }
  
  button {
    width: 112px;
    height: 37px;
    font-family: Roboto;
    font-size: 14px;
    color: var(--text);
    background: var(--pink);
    border-width: 1px;
    border-radius: 0.2rem;
    padding: 0.3rem 1rem;
    margin: 1.5rem 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const BoxTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Title = styled.h2`
  width: 100%;
  height: 100%;

  font-family: Roboto;
  color: var(--text);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const Text = styled.strong`
  width: 100%;
  height: 100%;

  font-family: Open Sans;
  font-style: normal;
  justify-content: justify;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
`;
