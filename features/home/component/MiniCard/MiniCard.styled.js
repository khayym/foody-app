import styled from 'styled-components'
import Image from "next/image";
import { css } from "styled-components";

export const Wrapper = styled.div`
background-color:${({ theme }) => theme.colors.white};
padding: 19px;
width: 278px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
height: 91px;
display: flex;
align-items: center;
justify-content: space-around;
position: absolute;
right: 0;
bottom: 10px;

${({ top, right }) => css`
        right: ${right ? `${right}px` : "0"};
        top: ${top ? `${top}px` : "0"};
        position:absolute;

        @media (max-width: 1199.9px) {
        &:nth-child(odd){
                right: 200px !important;
        }
        }
        @media (max-width: 991.9px) {
        &:nth-child(odd){
                right: 450px !important;
        }
        }
        @media (max-width: 767.9px) {
        &:nth-child(odd){
        top: 170px !important;
        right: 0px !important;
        }
        &:nth-child(even){
        display: none;
        }
        }
    `}
        @media (max-width: 575.9px) {
        padding: 5px;
        width: 189px;
        }
`
export const ImageWrap = styled(Image)`
width:20px;
`
export const TextWrap = styled.p`
font-weight: 500;
font-size: 16px;
`
export const Yummy = styled.p`
font-weight: 500;
font-size: 16px;
padding: 0;
margin: 0;
`