import styled from 'styled-components';

export const List = styled.ul`
padding: 0px 20px 0px 0px !important;
`
export const TitleItem = styled.h6`
font-weight: 900;
font-size: 18px;
color:white;
line-height: 50px;
margin: 0;
`
export const Item = styled.li`
list-style: none;
font-weight: 400;
font-size: 14px;
color: ${({ theme }) => theme.colors.grayText1};
line-height: 25.5px;
transition: .2s;
    &:hover{
        color: ${({ theme }) => theme.colors.grayText2};
    }
`
