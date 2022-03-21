import styled from 'styled-components'
import { TextInputOwn } from '../../../../../share/components/Inputs/text'
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mantine/core';


export const FormInput = styled(TextInputOwn)`
`

export const CustomRadio = styled(Radio)`

   .MuiSvgIcon-root{
       font-size:1.875rem;
       color:#6FCF97;
   }
`


export const FormControled = styled(FormControl)`

   padding-top:2rem !important;

    #demo-row-radio-buttons-group-label{
        color:${({ theme }) => theme.colors.grayText2};
        font-size:1.125rem;
        font-weight:600;
    }
`

export const SubmitButton = styled(Button)`
margin-top:3.1rem;
height:3.25rem;
color:#fff;
background-color: #6FCF97;
transition: all 0.3s;
font-size:18px;

&:hover{
    background-color: #3ae07f;
}
`