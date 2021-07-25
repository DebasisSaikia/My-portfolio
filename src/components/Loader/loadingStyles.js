import styled from 'styled-components';

export const LoadingContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #111;
/* font-family:'Creme Espana' ; */

h1{
    font-size: 8rem;
    color: #fff;
    animation: blur .75s ease-out infinite;
  text-shadow: 0px 0px 5px #fff, 0px 0px 7px #fff;

  @media(max-width:1030px){
      font-size: 5rem;
  }
  @media(max-width:768px){
      font-size: 2rem;
  }


    @keyframes blur {
  from {
    text-shadow:0px 0px 10px #fff,
      0px 0px 10px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 25px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #fff,
      0px 0px 50px #7B96B8,
      0px 0px 150px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px 10px 100px #7B96B8,
      0px -10px 100px #7B96B8,
      0px -10px 100px #7B96B8;
  }
}
}
`