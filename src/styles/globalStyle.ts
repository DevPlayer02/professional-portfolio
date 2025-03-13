import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
    }

    h1, h2, p, ul, li, figure {
        margin: 0;
        padding: 0;
    }

`;
