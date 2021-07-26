import styled from 'styled-components';

export const BioContainer = styled.div`
width: 100%;
height: 100%;
background: black;

color: #fff !important;
`
export const SkillSection = styled.div`
max-width: 90%;
height: 100%;

margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
padding-top: 7rem;
padding-bottom: 5rem;

@media(max-width:760px){
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 2rem;
    gap: 0;
}



.skills_div{
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
         @media(max-width:760px){
                font-size: 2.5rem;
        }
        @media(max-width:500px){
                font-size: 2rem;
        }
    }
    .skills_container{
        max-width: 90%;
        height: 100%;
        border-left: 2px solid whitesmoke;
        display: grid;
        grid-template-columns: 1fr 1fr;
        ul{
            
            font-size: 1.5rem;
            padding: 0.5rem 2rem 1rem;
            @media(max-width:760px){
                font-size: 1rem;
        }
        @media(max-width:500px){
                font-size: 1rem;
                font-weight: 600;
                padding: 0.3rem 1.5rem 0.5rem;
        }
        
            li{
               font-family: 'Nunito Sans';
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
         @media(max-width:760px){
                font-size: 2.5rem;
        }
        @media(max-width:500px){
                font-size: 2rem;
        }
    }
    
    .tools_container{
    max-width: 90%;
    height: 350px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media(max-width:1020px){
        display: flex;
        flex-direction: column;
        h2{
            font-size: 1.5rem;
        }
    }
    @media(max-width:760px){
    display: flex;
    flex-direction: row;
    justify-content: center;
}
@media(max-width:760px){
           height: 250px;
    }
    @media(max-width:360px){
           
           height: 200px;
    }

    ul{
            font-size: 1.5rem;
           
            padding: 0.5rem 2rem 1rem;
            @media(max-width:760px){
                font-size: 1rem;
        }
        @media(max-width:500px){
                font-size: 1rem;
                font-weight: 600;
                padding: 0.3rem 1.5rem  0.5rem;
        }
            li{
               font-family: 'Nunito Sans';
               font-weight: 600;
               background: -webkit-linear-gradient(#eee, #aaa);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        .resume_container{
            background:#111;
            width: 300px;
            height: 300px;
            border-radius: 10rem;
            display: flex;
            justify-content: center;
            align-items: center;
            h2{
                font-size: 3rem;
                transform: rotate(-20deg);
                font-family: 'parkway lush';
                text-decoration: underline;
            }

            @media(max-width:1020px){
                background:transparent;
            h2{
                font-size: 2rem;
                text-align: center;
            }
    }

    @media(max-width:760px){
            background:#111;
             width: 200px;
            height: 200px;
    }
    @media(max-width:360px){
           width: 150px;
           height: 150px;
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