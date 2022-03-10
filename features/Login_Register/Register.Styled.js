import { Paper } from '@mantine/core'
import styled from 'styled-components'

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