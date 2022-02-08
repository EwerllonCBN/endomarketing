import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-family: Roboto;
    color: var(--text);
    font-size: 1.8rem;
    padding-bottom: 0.5rem;
  }
`;

export const UserInf = styled.div`
  padding: 0.5rem 0.5rem;
  margin-bottom: 1rem;
  background: var(--background);
  border-radius: 5px;
  display flex;
  align-items: center;
  flex-direction: row;
  justify-content: initial;

  img {
    border-radius: 100%;
    border-width: 1px;
  }
`;

export const User = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: initial;
  flex-direction: column;
  justify-content: initial;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text);
    font-family: Open Sans;
    font-weight: bold;
    font-size: 1.5rem;
  }

  h3 {
    color: var(--text);
    font-family: Open Sans;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;
