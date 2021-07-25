import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

export const NavContainer = styled.nav`
width: 100%;
background-color: transparent;
height: 100px;
position: absolute;
z-index: 100;
top: 0;
color: ${colors.pureWhite};
`

export const NavItem = styled.ul`
max-width: 85%;
height: 100px;
background-color: transparent;
position: fixed;
top: 0;
right: 0;
left: 0;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

li{
    list-style: none;
     a{
        color: ${colors.pureWhite};

        &:hover{
            color: ${colors.fadedWhite};
        }

    }
    div{
        height: 55px;
        width: 55px;
        border:2px solid #ffff;
        border-radius: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
         @media(max-width:768px){
            width:40px;
            height: 40px;
        }
    }
    p{
        font-size: 2rem;
        font-family: 'parkway lush', sans-serif;
        font-weight: 600;
        letter-spacing: 2px;
        @media(max-width:768px){
            font-size: 1rem;
        }
    }
}

`

export const SocialLogos = styled.div`
    display: flex;
    gap: 40px;
    .social_icons{
        width: 30px;
        height: 30px
    }
     @media(max-width:768px){
         gap: 25px;
         .social_icons{
             width: 20px;
             height: 20px;
         }
     }
`
