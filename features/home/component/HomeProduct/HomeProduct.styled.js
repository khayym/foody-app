import styled from 'styled-components';
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import { css } from "styled-components";

export const ContentWrapper = styled.div``


export const Title = styled.h4`
font-weight: 900;
font-size: 50px;
margin: 0;
@media (max-width: 767.9px) {
    font-size: 25px;
}
`

export const Desc = styled.p`
font-size: 22px;
line-height: 30px;
color: ${({ theme }) => theme.colors.grayText1};
width: 80%;
@media (max-width: 991.9px) {
    width: 100%;
}
@media (max-width: 767.9px) {
   font-size: 16px;
}
`

export const Bgimg = styled.div`
width: 421.31px;
height: 556.74px;
background: #D63626;
border-radius: 50px;
transform: rotate(22.82deg);
position: absolute !important;
@media (max-width: 1199.9px) {
    transform: rotate(12deg);
    }
@media (max-width: 991.9px) {
    width: 387.27px;
    height: 451.72px;
    }
@media (max-width: 575.9px) {
    width: 300.27px;
    height: 340.72px;
    }
@media (max-width: 455.9px) {
    width: 187.27px;
    height: 251.72px;
    }
`

export const Split = styled(Grid).attrs(() => ({
    lg: 6,
    md: 6
}))
`
${({ order }) => css`
    order:${order ? '2' : '1'} !important;
@media (max-width: 767.9px) {
    order:${order ? '1' : '2'} !important;
}
 `}
`

export const ImgWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 991.9px) {
    padding: 50px 0px 0px 0px ;
}
`

export const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 90px 0px 0px 0px;
`

export const CustomImage = styled(Image).attrs(() => ({
    height: 440,
    width: 600
}))`
@media (max-width: 991.9px) {
    min-width: 460px !important;
    min-height: 400px !important;
    }
@media (max-width: 575.9px) {
    min-width: 290px !important;
    min-height: 300px !important;
    }
`
