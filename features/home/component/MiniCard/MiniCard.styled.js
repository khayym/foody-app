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
left: -72px;
bottom: 10px;

${({ top, left }) => css`
        top: ${top ? `${top}px` : "0"} !important;
        left: ${left ? `${left}px` : "0"} !important;
        position:absolute;

        @media (max-width: 1199.9px) {
        &:nth-child(even){
                left: 44px !important;
        }
        &:nth-child(odd){
                left: -23px !important;
        }
        }
        @media (max-width: 767.9px) {
        &:nth-child(even){
            display: none !important;
        }
        &:nth-child(odd){
                left: 117px !important;
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