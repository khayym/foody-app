import styled from 'styled-components'

export const FooterWrapper = styled.div`
background: ${({ theme }) => theme.colors.black};
padding: 50px;
position:relative;
@media(max-width:575.9px){
    padding: 25px;
}
`
export const ListWrap = styled.div`
display: flex;
align-items:center;
justify-content: space-evenly;
@media(max-width:991.9px){
    justify-content: center;
}
@media(max-width:575.9px){
    display: none;
}
`
export const Desc = styled.p`
font-size: 22px;
line-height: 30px;
color: ${({ theme }) => theme.colors.grayText1};
@media(max-width:575.9px){
    font-size: 18px;
    text-align: center;
}
`

export const Logo = styled.h2`
font-weight: 800;
font-size: 28px;
color: ${({ theme }) => theme.colors.white};
line-height: 24px;
`

export const SosialNetwork = styled.div`
display: flex;
align-items:center;
justify-content: start;
@media(max-width:575.9px){
    justify-content: center;
}
`

export const IconWrap = styled.div`
width: 50px;
height: 50px;
border: 1px solid #FFFFFF;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin:0px 16px 0px 0px;
color:${({ theme }) => theme.colors.orange};
background: ${({ theme }) => theme.colors.black};
transition: .3s;
    &:hover{
color: ${({ theme }) => theme.colors.white};
background:${({ theme }) => theme.colors.orange};
    }
`