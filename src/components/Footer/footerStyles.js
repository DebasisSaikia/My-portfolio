import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

export const FooterContainer = styled.footer`
height: 100vh;
width: 100%;
/* background-color:${colors.pureBlack} ; */
background: #390000;
color: ${colors.fadedWhite};
`

export const FooterItems = styled.div`
max-width: 90%;
/* background-color: yellow; */
height: 100vh;
margin: 0 auto;
padding-top: 5rem;

h1{
    text-align: center;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 131px;
    letter-spacing: 0.01em;

}
.divider{
    background-color: red !important;
    color: red !important;
    height: 2px;
    width: 100%;
    outline: none !important;
}
h2{
    text-align: center;
    font-style: italic;
    font-weight: 400;
    font-size: 50px;
    line-height: 100px;
    letter-spacing: 0.05em;
    span{
        color: red;
    }
}
`

export const SocialLinks = styled.div`
padding-top: 4rem;
text-align: center;
    p{
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 65px;
        letter-spacing: 0.01em;
    }

    .logo_container{
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;
        padding: 4rem 0;

        svg{
            width: 50px;
            height: 50px;
            cursor: pointer;

            &:hover{
                color: gray;
                transition: all 0.3s ease-in-out;
            }
        }
    }
`

export const CopyRights = styled.div`
padding-top: 1rem;
`