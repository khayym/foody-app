import styled from 'styled-components'
import { ProfileComponent } from '../profil/profil.styled'

export const BasketContainer = styled(ProfileComponent)`
 
.delete_icon{
        color:${({ activeTab, theme }) => activeTab ? theme.colors.mainRed : theme.colors.whiteLight3};
        align-self: baseline;
        position:absolute;
        top:0;
        right:0;
        &:hover{
            cursor:pointer;
        }
    }

.user_basket_header{
    display:flex;
    align-items:center;
    gap:.3125rem;
    color:${({ activeTab, theme }) => activeTab ? theme.colors.mainRed : theme.colors.mainRed};
    padding-bottom:16px;
}

.user_basket_main{
    position:relative;
    display:flex;
    align-items: center;
    margin:32px 0;
    
}

.main{
max-height:735px;
overflow:auto;
}

.basket_conetent{
    width:100%;
    display:flex;
    justify-content:space-between;
    position:relative;

    h2,h5{
        color: ${({ activeTab, theme }) => activeTab ? theme.colors.mainRed : theme.colors.grayText2};
        margin: 9.6px 16px;
        font-weight:500;
    }

    h2{
        font-size:22px;
    }

    h5{
        font-size:1.125rem;
    }

}

.img_conatiner{
        width:96px;
        height:96px;

        img{
            object-fit: cover;
            width:100%;
            height:100%;
        }
    }

svg{
        color:${({ activeTab, theme }) => activeTab ? theme.colors.mainRed : theme.colors.mainRed};
    }
`

export const OrderCount = styled.div`

.order_buttons_group{
    background-color:#fff;
    height:90px;
    border-radius: 3.125rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right:3rem;

    button{
        background-color:transparent;
        border:none;
        font-size:1.6rem;
        color: ${({ activeTab, theme }) => activeTab ? theme.colors.mainRed : theme.colors.grayText2};

        &:hover{
            cursor:pointer;
        }
    }
}
`

export const BasketFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.mainRed};
border-radius:100px;
padding-left:52px;
height:3.625rem;
display:flex;
align-items:center;
color:#fff;
font-size:22px;
justify-content:space-between;
margin: 2rem 0;

.prize{
    background-color:#fff;
    color:${({ theme }) => theme.colors.mainRed};
    border-radius:100px;
    padding:.6rem 3.2rem;
    margin-right:.5rem;
    font-size:20px !important;

    @media(max-width: 355px){
        padding:.6rem 1rem;
    }
}
`