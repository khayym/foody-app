import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
    transform: rotate();
    ${({ top, left }) => css`
        top: ${top ? `${top}px` : "0"} !important;
        left: ${left ? `${left}px` : "0"} !important;
        position:absolute;
        @media (max-width: 767.9px) {
        &:nth-child(2){
            display: none !important;
        }
        &:nth-child(3){
            display: none !important;
        }
        &:nth-child(1){
          top: 320px !important;
        }
        &:nth-child(4){
            top: 70px !important;
        }
        left: 50px !important;
        }
    `}

`
export const CardWrapper = styled.div`
width: 274px;
height: 174px;
background-color: ${({ theme }) => theme.colors.white};
box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
border-radius: 20px;
padding: 60px 20px 20px 20px;
position:absolute;
transform: rotate(335deg);
@media (max-width:991.9px) {
    transform:rotate(0deg);
}
@media (max-width:375.9px) {
    width: 244px;
    left: -25px;
}

`
export const CardImage = styled.div`
position: absolute;
width: 120px;
height: 118px;
box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
border-radius: 200px;
display: flex;
justify-content: center;
align-items: center;
background-color:${({ theme }) => theme.colors.white};;
top: -60px;
right: 0;
@media (max-width:575.9px) {
    width:100px;
    height: 100px;
}

`
export const Text = styled.div``

export const Title = styled.p`
font-weight: 600;
font-size: 22px;
line-height:22px;
color:${({ theme }) => theme.colors.grayText2}; 
padding: 0;
margin: 0;
`
export const Price = styled.p`
font-weight: 600;
font-size: 20px;
color:${({ theme }) => theme.colors.grayText2};
`
