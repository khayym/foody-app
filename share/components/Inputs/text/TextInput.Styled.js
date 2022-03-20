import styled from 'styled-components'
import { TextInput } from '@mantine/core';

export const TextInputCustom = styled(TextInput)`
width:100%;

label{
    font-size: 17px !important;
    color: #2E3A59 !important;
    font-weight:600 !important;

}
    input{
    background-color: #f7f9fc !important;
    height: 48px !important;
    border-radius: 4px !important;
    color: #2e3a59 !important;
    font-size: 19px !important;
    width: 100% !important;
    
      &::placeholder {
         color: #8f9bd3 !important;
         font-size: 19px !important;
      }

}
`

