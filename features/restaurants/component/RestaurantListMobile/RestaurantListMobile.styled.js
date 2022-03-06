import styled from 'styled-components';

export const RootWrapper = styled.div`
height: '100%';
box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
margin-bottom: 28px;
background-color: ${({ theme }) => theme.colors.white}; 
 @media(min-width:899.9px){
        display: none;
    }
`
export const BtnText = styled.span`
font-weight: 600;
font-size: 16px;
color:  ${({ theme }) => theme.colors.grayText2};
margin-left: 10px;
`