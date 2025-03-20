import { createGlobalStyle } from "styled-components"
import { DefaultTheme } from "styled-components"
import { pxToRem } from "../utils"

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    body, html {
        font-family: "Roboto", sans-serif;
        background-color: #000000;
        color: #FFFFFF; 
        margin: 0;
        padding: ${pxToRem(60)} 0 0 0;
        box-sizing: border-box;
        width: 100%;
    }

    h1, h2, p, ul, li, figure, a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        color: inherit;
    }

    .mb-1 {
        margin-bottom: ${pxToRem(32)};
    }

    .mb-2 {
        margin-bottom: ${pxToRem(64)};
    }

    .mb-3 {
        margin-bottom: ${pxToRem(256)};
    }

`
