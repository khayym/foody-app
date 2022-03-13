import styled from 'styled-components';
export const ContentWrapper = styled.div``

export const ItemWrapper = styled.div`
background-color: ${({ theme }) => theme.colors.white};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 235px;
height: 345px;
padding: 20px;
margin:0px 0px 30px 10px;
position: relative;
    @media(max-width:541.9px){
    width: 200px;
    height: 340px;
    padding: 12px;
    margin: 0px 3px 30px 3px;
    }
    @media(max-width:463.9px){
    width: 130px;
    height: 250px;
    padding: 12px;
    margin: 0px 4px 30px 4px;
    }
 
`
export const ImgWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
    &img{
    @media(max-width:463.9px){
        width: 112px;
        height: 88px;
    }
    }

`
export const ItemBadge = styled.span`
position: absolute;
top: 0;
left: 0;
width: 53px;
height: 27px;
background-color:${({ theme }) => theme.colors.mainRed};
color: ${({ theme }) => theme.colors.white};
font-weight: 500;
font-size: 12px;
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
`

export const Title = styled.h5`
font-weight: bold;
font-size: 22px;
color: ${({ theme }) => theme.colors.grayText2};
margin: 7px 0px 3px 0px;
    @media(max-width:463.9px){
    font-size: 16px;
    }
`
export const Desc = styled.p`
margin: 5px 0px;
font-size: 16px;
line-height: 25px;
color:  ${({ theme }) => theme.colors.grayText1};
    @media(max-width:463.9px){
        font-size: 12px;
        line-height: 15px;
    }
`

export const AboutItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
    @media(max-width:463.9px){
        flex-direction: column;
    }
.iwierF{
    @media(max-width:463.9px){
        width: 100%;
        padding: 2px 23px !important;
    }
    }
`

export const Price = styled.p`
font-weight: bold;
font-size: 16px;
color:  ${({ theme }) => theme.colors.grayText2};
    @media(max-width:463.9px){
        font-size: 13px;
        margin: 0;
    }
`