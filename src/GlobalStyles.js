import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0; /* Para eliminar el margen por defecto */
    padding: 0; /* Para eliminar el padding por defecto */
    box-sizing: border-box; /* Para que el padding y el borde se incluyan en el tamaño total */
  }
`;

export default GlobalStyles;