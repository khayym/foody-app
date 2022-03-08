import styled from "styled-components";

export const Wrapper = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 327px;
height: 386px;
padding: 23px;
margin: 15px 10px;
@media (max-width: 575.9px) {
width: 300px;
padding: 10px;
margin: 15px 0px;
}
`
export const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const ImageWrap = styled.div`
display: flex;
justify-content: center;
align-items:center;
`

export const ContentWrap = styled.div`
text-align: center;
`

export const Title = styled.div`
font-weight: bold;
font-size: 30px;
color: ${({ theme }) => theme.colors.black};
margin-bottom: 12px;
`

export const Desc = styled.div`
font-size: 18px;
color: ${({ theme }) => theme.colors.grayText1};
line-height: 30px;
margin-bottom: 10px;
`