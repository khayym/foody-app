import styled from 'styled-components';
import { Card } from '@mantine/core';

export const LentBox = styled.div`
display:flex;
flex-direction:column;
align-items: center;
/* margin-top:5rem; */
margin:5rem 4rem 0 4rem;

@media(max-width:900px){
    flex-direction:column;
}

img{
    object-fit: contain !important;
}

h1{
    font-weight: 900;
    font-size: 40px;
    margin:0px;

    @media(max-width:900px){
        text-align:center;
    }
}

p{
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    width:50%;
    text-align: center;
    color: ${({ theme }) => theme.colors.grayText1};

    @media (max-width:900px){
        width:100%;
    }
}

.cards-collection{
    display:flex;
    padding: 2.375rem 0;
    justify-content:space-between;
    gap:4.5rem;
    width:100%;

    @media(max-width:900px){
        flex-direction:column;
        gap:2rem;
        padding:0;
        align-items: center;
    }

    @media(max-width:1145px){
        padding:0;
    }
}

`

export const CustomCard = styled(Card)`
width:20.4rem;
height:24.125rem !important;
display:flex;
flex-direction:column;
justify-content:center;

.text-head{
color:${({ theme }) => theme.colors.grayText2};
font-weight: 700;
font-size: 22px;
line-height: 70px;
}

.text-fut{
font-size: 18px !important;
text-align: center;
color: ${({ theme }) => theme.colors.grayText2}
}
`