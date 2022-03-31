import { ListItem, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import styled from 'styled-components';
import { css } from "styled-components";

export const ListWrapper = styled(List)`
background-color: ${({ theme }) => theme.colors.whiteLight1} !important; 
height: 90vh; 
overflow-y:auto;
max-width: 100% !important;


.css-aw8ruk-MuiTypography-root{
display: flex !important;
justify-content: center !important;
}

.MuiListItem-gutters{
    padding: .2rem 1rem !important;

    .MuiListItemButton-root{
        border-radius:4px;
    }
}

${({ big }) => css`
        @media (max-width: 899.9px) {
            display:${big ? 'none' : 'block'} !important;
            max-width: 100%;
            max-height: 100% !important;  
            background-color: ${({ theme }) => theme.colors.white} !important;
        }
    `}
`

export const CustomListItem = styled(ListItem)`
    .MuiListItemText-root{
        span{
            font-weight: 600 !important;
            font-size: 20px !important;
        }
    }

  .css-1m4u3pv-MuiButtonBase-root-MuiListItemButton-root.Mui-selected{
      background-color:#f0e1e1;
      color:${({ theme }) => theme.colors.mainRed} !important;
      
      &:hover {
          background-color:#f0e1e1;
      }
  }
`

export const CustomListItemText = styled(ListItemText)`

`