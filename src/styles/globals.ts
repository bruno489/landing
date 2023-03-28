import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root{
    --primaria: #E04B47;
    --secundaria: #3192E0;
    --terciaria: #286494;
 }
 @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat.ttf')
  }

`;

export default GlobalStyle;
