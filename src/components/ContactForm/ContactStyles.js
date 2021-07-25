import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyles';

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    /* background: #0F2027;  
    background: #0f0c29;  */
    background-color: #111;
    /* background-image: url(https://media.giphy.com/media/3o6UBedJJfaxXHvZyU/giphy.gif); */
	background-size: cover;
    color: ${colors.pureWhite};
`
export const ContactInfo = styled.div`
    max-width: 90%;
    margin: 0 auto;
    padding-top: 5rem;

    @media(max-width:520px){
        padding-top: 2rem;
    }

    div{
        max-width: 720px;
        margin: 0 auto;
        @media(max-width:780px){
            width: 500px;
        }
        @media(max-width:450px){
            width: 300px;
        }
    }

    h1{
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 50px;
        line-height: 50px;

        span{
            color: #C80D0D;
            font-style: italic;
            font-family: Creme Espana;
        }
        @media(max-width:520px){
            font-size: 40px;
            line-height: 40px;
        }
    }

    form{
        input{
            margin-top: 1.5rem;
        }
        textarea{
            margin-top: 1.5rem !important;
        }
        button{
            padding: 10px 50px;
            font-size: 1rem;
            font-weight: 600;
            outline: none;
            border:1px solid transparent;
            margin-top: 1.5rem;
            margin-bottom: 2.5rem;
            cursor: pointer;
            border: 1px solid #C80D0D;
            color: #C80D0D;
            background-color: transparent;
            &:hover{
                color: #111;
                background:#C80D0D;
                transition: all 0.3s ease-in-out;
            }
        }
    }

    input,textarea{
        border: none;
        outline: none;
        height: 50px;
        background-color: transparent;
        border-bottom: 2px solid #f1f1f1;
        color: wheat;
        font-size: 2rem;
        width: 500px;
        @media(max-width:450px){
            width: 280px;
            font-size: 1rem;
            height: 30px;
        }
    }

    .form_items{
        display: flex;

        h3{
            font-size: 1.5rem;
            writing-mode: vertical-rl;
            text-orientation: upright;
             animation: fill 1s 2s infinite;
              @keyframes fill {
                from {-webkit-text-fill-color: #fff; }
                to{-webkit-text-fill-color: #304352;  }
                }
                @media(max-width:450px){
                        font-size: 1.1rem;
        }
        }
    }
`

