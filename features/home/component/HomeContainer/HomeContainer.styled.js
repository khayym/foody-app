import styled from 'styled-components'
import { Stack } from '@mui/material';
import Image from 'next/image';
import { css } from "styled-components";

export const Wrap = styled.div`
padding:40px 10px 40px 20px;
background-color:${({ theme }) => theme.colors.whiteLight1};
height:100vh;
display: flex;
align-items: center;
justify-content: space-between;
    @media (max-width: 991.9px) {
        flex-direction: column-reverse;
        height:auto;
        padding:0px !important;
    }
`

export const ContentWrapper = styled.div`
text-align: justify;
margin:0px 17px 0px 25px;
    @media (max-width: 575.9px) {
        text-align: center;
    }
`

export const Title = styled.h4`
font-weight: 900;
font-size: 54px;
line-height: 70px;
margin:0;
color: ${({ theme }) => theme.colors.black};
    @media (max-width: 575.9px) {
    line-height: 30px;
    font-size: 20px;
    }
`

export const Desc = styled.p`
font-size: 20px;
line-height: 30px;
width: 70%;
margin-bottom:43px;
color: ${({ theme }) => theme.colors.grayText1};
    @media (max-width: 765.9px) {
        width: 100%;
    }
    @media (max-width: 575.9px) {
        display: none;
    }
`
export const ImageWrapper = styled.div`
background-color: ${({ theme }) => theme.colors.black};
color: ${({ theme }) => theme.colors.black};
border-radius: 80px;
height: 470px;
position: relative;
display: flex;
justify-content: center;
align-items: center;
    @media (max-width: 991.9px) {
margin-bottom: 40px;
    }
    @media (max-width: 767.9px) {
background-color:${({ theme }) => theme.colors.whiteLight1};
margin-bottom: 3px;
    }

`
export const TopImage = styled(Image)`
    @media (max-width: 991.9px) {
min-width: 380px !important;
min-height: 380px !important;
    }
    @media (max-width: 767.9px) {
min-width: 280px !important;
min-height: 280px !important;
    }
position: absolute;
object-fit: cover;
`

export const Features = styled.div`
padding: 60px 0px;
${({ h }) => css`
    margin-bottom:${h ? '280px' : '0'} !important;
@media (max-width: 765.9px) {
    margin-bottom:${h ? '0px' : '0px'} !important;
}
 `}
`
export const FeatureContent = styled.div`
text-align: center;
`
export const FeaturTitle = styled.h4`
font-weight: 900;
font-size: 40px;
color: ${({ theme }) => theme.colors.black};
margin: 0;
`
export const Text = styled.p`
font-size: 22px;
color: ${({ theme }) => theme.colors.grayText1};
text-align: center;
width: 50%;
line-height:32px;
@media (max-width: 991.9px) {
    width: 80%;
}
@media (max-width: 575.9px) {
    width: 92%;
}
`
export const FeaturDesc = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

export const FeatureCard = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
margin-top: 20px;
flex-wrap:wrap;
`

export const ProductWrapper = styled.div``

export const BtnWrapper = styled(Stack).attrs(() => ({
    spacing: 3,
    direction: "row",
    alignItems: "center"
}))`
    @media (max-width: 575.9px) {
flex-direction: column;
width: 100%;
    &:nth-child(even){
    margin-bottom: 4px !important;
        }
    }   
`