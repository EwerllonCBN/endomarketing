import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --background: #F2F3F5;
  --white: #FFFFFF;

  --background-board: #FDFDFD;
  --background-board-management: #3489B11A;
  --background-button: #3489B1;


  --pink: #FFF2DE;
  

  --text: #707070;
}
  *{margin: 0;
  padding: 0;
  box-sizing: border-box;
  },

  //Vamos diminuir as fontes em dispositivos menores visando a melhor experiencia do usuario "UX";
  //Por padrão as fontes no browser são de 16px
  html {
    @media (max-width: 1080px){
      font-size: 93.75%; //15px
      
    }
    @media (max-width: 720px){
      font-size: 87.5% //14px
    }
  }

  //Definindo corres para o background da tela
  body{
    background: var(--background);
    -webkit-fonts-smoothing: antialiased;
  }

  //Definindo o estilo de font
  body, input, textarea, button, h3 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  } 

  //Definindo o estilo de font 
  h1, h2, h4, h5, h6, strong{
    font-family: 'Roboto', sans-serif;
    weight: 700;
  }

  //Tornando nosso button clicável
  button {
    cursor: pointer;
  }

  //Tudo o que estiver desabilitado em nossa aplicação, button, inputs, ficara mais claro.
  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`; 