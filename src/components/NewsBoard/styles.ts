import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-bottom: 1rem;
  display: flex;
  justify-content: row;
  align-items: center;
  background: var(--white);
`;

export const Button = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 0.5rem;
  button {
    font-size: 30px;
    color: var(--text);
    background: #DBDBDB;
    border: 0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
`;
export const User = styled.div`
  height: 100%;
  padding: 0.5rem 0.5rem;

  @media (max-width: 630px) {

    margin-bottom: 2rem;
  }
`;
export const UserInf = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 9px;
  padding: 1rem 0;
  h2 {
    font-family: Roboto;
    font-size: 16px;
    color: var(--text);
  }
  h3 {
    width: 537px;
    height: 18px;
    margin-bottom: 25px;
    font-family: Open Sans;
    font-size: 13px;
  }
`;
export const TitleType = styled.div`
  background: var(--text);
`;
export const Notice = styled.div`
width: 100%;
  display: flex;
  padding: 0;
  p{
    word-wrap: break-word;
    color: var(--text)
    margin-right: 4px;
    margin-top: 4px;
    margin-bottom: 7px;
    font-family: Open Sans;
    font-size: 9px;
  }
  h2{
    margin-right: 4px;
    margin-top: 4px;
    margin-bottom: 7px;
    font-family: Open Sans;
    font-size: 9px;
  }
`;
