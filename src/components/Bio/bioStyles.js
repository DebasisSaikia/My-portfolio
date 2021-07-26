import styled from 'styled-components';

export const BioContainer = styled.div`
width: 100%;
height: 100%;
background: black;
/* background-image: url(https://media.giphy.com/media/3og0IS6SldW60DdCRa/giphy.gif); */
	/* background-size: cover; */
    /* background-size: 100% 100%; */
    /* background-repeat: no-repeat;
    background-position: right;
    object-fit: contain; */
color: #fff !important;
`
export const SkillSection = styled.div`
max-width: 90%;
height: 100%;
/* background:red; */
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
padding-top: 7rem;
padding-bottom: 5rem;



.skills_div{
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    h1{
         writing-mode: vertical-lr;
        text-orientation: bottomright;
        font-size: 4rem;
        text-transform: uppercase;
        animation: glitch 1s linear infinite;
        font-family:'Libre Franklin' ;
    }
    .skills_container{
        max-width: 90%;
        height: 100%;
        border-left: 2px solid whitesmoke;
        display: grid;
        grid-template-columns: 1fr 1fr;
        ul{
            /* padding-left: 2rem; */
            /* padding-top: 0.5rem; */
            font-size: 1.5rem;
            /* padding-right: 1rem; */
            padding: 0.5rem 2rem 1rem;
            li{
               font-family: 'Nunito Sans';
               /* font-size: 2rem; */
               font-weight: 600;
               background: -webkit-linear-gradient(#eee, #aaa);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
}

.tools_div{

        h1{
        font-size: 4rem;
        text-transform: uppercase;
        animation: glitch 1s linear infinite;
         font-family:'Libre Franklin' ;
    }
    
    .tools_container{
    max-width: 300px;
    height: 350px;
    border-top: 2px solid #fff;

    ul{
            /* padding-left: 2rem; */
            /* padding-top: 0.5rem; */
            font-size: 1.5rem;
            /* padding-right: 1rem; */
            padding: 0.5rem 2rem 1rem;
            li{
               font-family: 'Nunito Sans';
               /* font-size: 2rem; */
               font-weight: 600;
               background: -webkit-linear-gradient(#eee, #aaa);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
}
}

 @keyframes glitch{
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg);
  }
}


`