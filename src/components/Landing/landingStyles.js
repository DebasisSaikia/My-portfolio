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
        font-size: 80px;
        line-height: 90px;
        letter-spacing: 0.01em;
        letter-spacing: 4px;
        margin-left: 2rem;
        font-family: 'Questrial', sans-serif;
       
        /* -webkit-text-stroke: 0.1px #fff; */
        /* -webkit-text-fill-color: #111; */
        background: -webkit-linear-gradient(#eee, #555);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: fill 1s 2s infinite;
    }
    @keyframes fill {
  0% {
       -webkit-text-fill-color: red; 
    
    }
  25% {
       -webkit-text-fill-color: orange;
    
    }
    50% {
       -webkit-text-fill-color: purple;

    }
    75%{
       -webkit-text-fill-color: #1ff498;
    }
    100%{
       -webkit-text-fill-color: #fff;
    }
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
        background: -webkit-linear-gradient(#eee, #555);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
             &:hover{
        background: -webkit-linear-gradient(#6d1ff4,  rgb(233, 121, 29));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
            }
        
        .yellow{
            background: -webkit-linear-gradient(#eee, #333);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

        &:hover{
        background: -webkit-linear-gradient(#e12, #333);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
            }
        }

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