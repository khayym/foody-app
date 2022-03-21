import styled from 'styled-components'
import Container from '@mui/material/Container';
import { Button } from '@mantine/core';

export const ProfileComponent = styled(Container)`
height:100%;

h1{
color:#4F4F4F;
font-weight: 600;
font-size: 30px;
line-height: 24px;
letter-spacing: 0.03em;
}
`

export const UserProfileContainer = styled.div`
display: flex;
width: 50%;
flex-direction:column;

@media(max-width:756px){
    flex-direction:column;
    width: 100%;
}
`

export const Div = styled.div`
display: flex;
gap:57px;

@media(max-width:756px){
    flex-direction:column;
    gap:0px;
}
`
export const CustomButton = styled(Button)`
background-color:#6FCF97;
height:3.3125rem;
transition: all 0.3s;
/* align-self:flex-e */
margin-top:2.8rem;
&:hover{
    background-color: #7cca9d;
}
`