import { createGlobalStyle } from "styled-components"
import { colors } from "./colors"

const StyledGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px 0 20px;
    height: 100%;
    background: ${colors.darkGreen};
    box-sizing: border-box;

    font-family: Montserrat, sans-serif;
    @media (max-width: 768px) {
      max-width: unset;
      width:100%;
      padding: 100px 20px 0 20px;
    };
  }

  .react-datepicker__current-month {
    display: none;
  }

  input[type="text"] {
    height: 30px;
    width: 200px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
  }

  .Dropdown-control {
    border-radius: 10px !important;
  }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
