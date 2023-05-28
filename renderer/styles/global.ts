import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

        --webkit-user-select: none;
        --ms-user-select: none;
        user-select: none;
    }

    html {
        background: #250331;
    }
`
