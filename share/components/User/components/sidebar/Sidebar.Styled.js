import styled from 'styled-components'
import Stack from '@mui/material/Stack';

export const CustomLinkContainer = styled(Stack)`
height:100%;
margin: 2.8rem 2.5rem 0 2.5rem; 
`


export const Items = styled.div`
    display: flex;
    align-items: center;
    transition:all .6s;
    gap:.875rem;
    padding-left:1rem;
    height: 56px;
    width: 100%;
    background-color:${({ activeTab }) => activeTab};
    border-radius: 4px;

    p{
        font-size:18px;
        letter-spacing: 0.03em;
        color:${({ activeTab, theme }) => activeTab ? theme.colors.mainRed : theme.colors.grayText1};
        font-weight:500;
    }

    svg{
        color:${({ activeTab, theme }) => activeTab ? theme.colors.mainRed : theme.colors.grayText1}
    }

    &:hover{
        background-color:${({ theme }) => theme.colors.mainRed};
        p,svg{
            color:#fff;
        }
    }

    
`