import styled from 'styled-components'
import SwipeableEdgeDrawer from '.'
// import SwipeableEdgeDrawer from '.'

export const ProductBottomSlider = styled.div`
  /* @media(min-width:899.9px){
        display: none;
    } */
`


export const BasketFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.mainRed};
border-radius:100px;
padding-left:52px;
height:3.625rem;
display:flex;
align-items:center;
color:#fff;
font-size:22px;
justify-content:space-between;
margin: 2rem 0;

@media(min-width:1211px){
    display:none;
}

.prize{
    background-color:#fff;
    color:${({ theme }) => theme.colors.mainRed};
    border-radius:100px;
    padding:.6rem 3.2rem;
    margin-right:.5rem;
    font-size:20px !important;

    @media(max-width: 355px){
        padding:.6rem 1rem;
    }
}
`