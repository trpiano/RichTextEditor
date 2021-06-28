import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --red-300: ${props => props.theme.colors.primary};
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.17%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-size: 14px;
        font-family: sans-serif;
    }
`