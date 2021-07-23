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
grid-template-columns: 1fr 1fr;
gap: 10rem;

.grid_1{
    
    display: flex;
    align-items: center;

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
    }
}
.introduction{
    display: flex;
    /* align-items: flex-end; */
    align-items: center;
    /* justify-content: flex-end; */
    
}

h2{
        font-style: normal;
        /* font-weight: 500; */
        font-size: 64px;
        line-height: 78px;
        margin-left: 5rem;
        font-family: 'Questrial';
        letter-spacing: 2px;
        /* color: #540bc2; */
    }
`