import { createGlobalStyle } from "styled-components";

const Fonto = createGlobalStyle`
*{
  font-family: 'Kanit', sans-serif;
  padding: 0;
  margin: 0;
  
}
body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
`;

export default Fonto;
