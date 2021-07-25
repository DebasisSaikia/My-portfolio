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
    font-family: Creme Espana;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 131px;
    letter-spacing: 0.01em;
    @media(max-width:768px){
        font-size: 60px;
        line-height: 110px;
    }
     @media(max-width:600px){
        font-size: 45px;
        line-height: 100px;
    }
     @media(max-width:400px){
        font-size: 40px;
        line-height: 80px;
    }
    @media(max-width:350px){
        font-size: 35px;
        line-height: 50px;
    }

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
     @media(max-width:768px){
        font-size: 30px;
        line-height: 80px;
    }
       @media(max-width:600px){
        font-size: 25px;
        line-height: 70px;
    }
     @media(max-width:400px){
        font-size: 20px;
        line-height: 60px;
    }
    
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
        font-family: Creme Espana;
        font-size: 48px;
        line-height: 65px;
        letter-spacing: 0.01em;
        @media(max-width:400px){
        font-size: 38px;
        line-height: 50px;
    }
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
            @media(max-width:500px){
                width: 35px;
                height: 35px;
            }
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