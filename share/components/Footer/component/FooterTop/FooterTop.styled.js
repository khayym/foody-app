import styled from "styled-components";


export const Wrapper = styled.div`
position: absolute;
left: 50%;
transform: translate(-50%,0);
width: 1066px;
height: 372px;
top: -317px;
background: #272727;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: space-between;
padding:0px 50px;
    @media(max-width:1199.9px){
        width: 900px;
        height: 262px;
        top: -200px;
    }
    @media(max-width:991.9px){
        padding: 20px;
        width: 645px;
    }
    @media(max-width:767.9px){
       width: 492px;
       justify-content: center;
    }
    @media(max-width:575.9px){
       width: 292px;
    }
`


export const CenterWrap = styled.div`
text-align: center;
width: 58%;

`

export const Title = styled.h5`
font-weight: 500;
font-size: 50px;
line-height: 70px;
color: ${({ theme }) => theme.colors.white};
text-align: center;
margin: 0 0 30px 0;

    @media(max-width:991.9px){
    line-height: 60px;
    font-size: 32px;
    }
    @media(max-width:767.9px){
    line-height: 48px;
    font-size: 26px;
    }
    @media(max-width:575.9px){
    line-height: 31px;
    font-size: 15px;
    }
`

export const RightImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media(max-width:767.9px){
       display: none;
    }
`
export const LeftImg = styled(RightImg)`

`


export const ButtonFooter = styled.button`
width: 220px;
height: 60px;
left: 616px;
top: 5424px;
background: #FB9300;
border-radius: 30px;
border: none;
font-weight: 500;
font-size: 20px;
color: #FFFFFF;
cursor: pointer;

@media(max-width:575.9px){
    width: 100%;
font-size: 17px;
    height: 52px;
}
`
