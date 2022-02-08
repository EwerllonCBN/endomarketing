import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;

  margin: 1rem auto;
  display: flex;
  flex-direction: column;



  background: #FDFDFD;

  @media (max-width: 1120px){

      width: 80%;
      margin: 1rem;

    }
    @media (max-width: 720px) {
    width: 90%;
  }

  h2 {
    padding-bottom: 0.5rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: var(--text);
  }

  h3 {
    padding: 0.20rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: var(--text);
  }

  button {
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
    margin: 0.2rem ;
    color: var(--text);
    background: #FFFFFF;
    border: 0;
    border-radius: 100rem;

    display: flex;
    justify-content: center;
    align-items: center;
    



    transition: filter 0.2s;


    &:hover {
      filter: brightness(0.9);
    }

`;

export const Content = styled.div`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 2px;
  background: rgba(52, 137, 177, 0.1);
  margin-bottom: 0.5rem;
`;

export const Title = styled.div`
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ManagementComercial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4rem;
  padding-bottom: 1rem;
`;
