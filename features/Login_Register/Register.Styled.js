import { Paper } from '@mantine/core'
import styled from 'styled-components'
import { Tabs } from '@mantine/core';

export const RegisterContainer = styled(Paper)`
    .mantine-TextInput-label,.mantine-PasswordInput-label{
        color: ${({ theme }) => theme.colors.grayText2};
        font-size:1rem;
    }

    .mantine-TextInput-wrapper,.mantine-PasswordInput-wrapper  {

        input{
        background-color: ${({ theme }) => theme.colors.lightRed1};
        border:0px;

        ::placeholder,
        ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.colors.grayText2};
        font-size:1rem;
        opacity:50%;
        }
        :-ms-input-placeholder {
            color: ${({ theme }) => theme.colors.grayText2};
            font-size:1rem;
            opacity:50%;
        }
        }}

        .mantine-PasswordInput-withIcon{
            background-color: ${({ theme }) => theme.colors.lightRed1};
        }

        .mantine-f02k2z:hover {
            background-color: ${({ theme }) => theme.colors.lightRed1};
        }

        button:not(:first-child) {
            background-color: ${({ theme }) => theme.colors.lightRed};
            color:#fff;
            font-size:1.2rem;
            transition: all 0.2s;
            &:hover{
                background-color: ${({ theme }) => theme.colors.mainRed}
            }
        }

        .mantine-11okk7q{
            border:0px solid transparent;
        }

`



export const RegisterLoginContainer = styled.div`
margin-top:16px;
display:flex;
@media(max-width:47.25rem) {
    flex-direction:column;
}
`

export const LeftSide = styled.aside`
width:55%;
background-color: ${({ theme }) => theme.colors.lightRed};
height:900px;
display:flex;
align-items: center;
justify-content: center;
border-radius:.25rem;

img{
    @media(max-width:756px) {
        width:100% !important;
        height:150px !important;
    }
}
@media(max-width:47.25rem) {
    width:100%;
    height:10rem;
}


`

export const LoginAndRegisterSide = styled.div`
    padding:16px;
    width:45%;

    @media(max-width:47.25rem) {
    width:100%;
    height:100vh;
}
`

export const CustomTab = styled(Tabs)`
margin-top:48px;

.mantine-1gjxu3z {
border-bottom: none;
}

button{
        border-bottom: 0rem ;
        font-size:30.016px;
        color:${({ theme }) => theme.colors.grayText1};


        &[aria-selected='true']{
            color:${({ theme }) => theme.colors.lightRed};
        }
    }


`