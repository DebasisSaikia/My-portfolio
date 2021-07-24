import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

export const MainContainer = styled.main`
max-width: 100%;
position: relative;
top: 0;
left: 0;
right: 0;
height: 100vh;
margin: 0 auto;
background-color: ${colors.pureBlack};
color: ${colors.fadedWhite};
`

export const LandingItem = styled.div`
max-width: 90%;
height:100vh;
margin: 0 auto;
display: grid;
grid-template-columns: 1.2fr 1fr;
gap: 5rem;

@media(max-width:1025px){
    display: flex;
    flex-direction: column;
    justify-content: center; 
    gap:0 ;
}

.grid_1{
    
    display: flex;
    align-items: center;
     padding-top: 2rem;

    h1{
        font-style: normal;
        /* font-weight: normal; */
        font-weight: 600;
        font-size: 150px;
        line-height: 139px;
        letter-spacing: 0.01em;
        letter-spacing: 4px;
        margin-left: 2rem;
        font-family: 'Questrial', sans-serif;
       
        /* -webkit-text-stroke: 0.5px #fff; */
        /* -webkit-text-fill-color: #111; */
        /* animation: fill 3s ease-in-out 0.5s infinite;
        animation-fill-mode: both; */
    }
    @keyframes fill {
  from { -webkit-text-fill-color: #111; }
  to { -webkit-text-fill-color: #fff; }
}
}
.introduction{
    display: flex;
    align-items: flex-end;
        margin-top: 2rem;
}

h2{
        font-style: normal;
        font-size: 64px;
        line-height: 78px;
        margin-left: 2rem;
        font-family: 'Poppins';
        letter-spacing: 2px;
        /* color: #540bc2; */

        @media(max-width:780px){
            font-size: 50px;
            line-height: 50px;
        }
        @media(max-width:480px){
            font-size: 30px;
            line-height: 35px;
        }
        @media(max-width:330px){
            font-size: 25px;
            line-height: 25px;
        }


    }
`