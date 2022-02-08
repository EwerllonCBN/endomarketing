import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SideLeft = styled.div`
  padding-left: 5rem;
  padding-right: 2rem;
  justify-content: space-between;
  @media (max-width: 720px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: 400px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
export const SideRight = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 20%;
  @media (max-width: 1120px) {
    padding-left: 5rem;
    padding-right: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: 720px) {
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 420px) {
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const NoticeBox = styled.div`
  width: 100%;
  height: 100%;
`;
export const ButtonType = styled.div`
  padding: 1rem 0;
  display: flex;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  button {
    font-family: Roboto;
    font-size: 14px;
    color: var(--white);
    background: var(--background-button);
    border: 0;
    border-radius: 0.2rem;
    padding: 0.3rem 1rem;
    margin: 0 0.25rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const Text = styled.h1`
  width: 240px;
  height: 48px;
  padding-bottom: 6px;
  color: var(--text);
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 35px;
`;
