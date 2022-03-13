import styled from "styled-components";

export const Wrapper = styled.div`
padding: 70px 20px 100px 20px;
`

export const Wrap = styled.div`
position: relative;
display: flex;
justify-content:center;
@media (max-width:1199.9px) {
    display: flex;
    justify-content: center;
    }
`

export const BgCard = styled.div`
width: 400px;
height: 687px;
border-radius: 100px;
transform:rotate(25deg);
background-color: ${({ theme }) => theme.colors.orange};
    @media (max-width:991.9px) {
        transform:rotate(0deg);
    }
    @media (max-width:767.9px) {
        height: 557px;
    }
`
export const Text = styled.div`
padding: 0px 0px 0px 25px;
`

export const Title = styled.h4`
font-size: 45px;
font-weight: 600;
line-height: 30px;
`
export const Desc = styled.p`
font-weight: 500;
font-size: 20px;
line-height: 35px;
color: ${({ theme }) => theme.colors.grayText1};
padding-bottom: 30px;
`