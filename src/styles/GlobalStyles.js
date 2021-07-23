import { createGlobalStyle } from 'styled-components'

export const colors = {
    pureBlack: '#000000',
    lightBlack: '#000000',
    pureWhite: '#FFFFFF',
    fadedWhite: '#E5E5E5',
    projectColor1: '#0A1839',
    projectColor2: '#390000',
    projectColor3: '#2A1E3C'
}


export const GlobalStyles = createGlobalStyle`
    :root{
        --maxWidth:1200px;
    }
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }

    body{
        margin: 0;
        padding: 0;
        transition: all 0.5s ease-in-out;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
            display: none;
        }
    -ms-overflow-style: none;
    scrollbar-width: none;

    a{
        text-decoration: none;
    }
`