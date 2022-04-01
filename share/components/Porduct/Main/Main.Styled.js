import { Grid } from '@mantine/core'
import styled from 'styled-components'

export const ProductDiv = styled.div`
display:flex;
width:100%;
padding:1rem 3.75rem;
margin-top:1rem;

@media(max-width:756px){
    padding:1rem .5rem 1rem 1.3rem;
}

`

export const CustomGrid = styled(Grid)`
width:100%;
justify-content:space-between;

ul{
    width:100%;
    padding:0px;
    height:750px;
    overflow:auto;

    li{

        @media(max-width:480px){
            height:auto !important;
        }
        padding:0 1rem;
        .item-price{
            button{
                border-radius:10rem;
                border:2px solid #BDBDBD;
                width:45px;
                height:45px;
                font-size:30px;
                font-weight:200;
                color:#BDBDBD;
                cursor:pointer;
                transition: all 0.3s;

                @media(max-width:615px){
                    width:20px;
                    height:20px;
                    font-size:8px;
                    font-weight:bold;
                }

                :hover{
                    background-color: #6FCF97;
                    border: 2px solid  #6FCF97;
                    color: #FFFFFF;
                }
                /* background-color:transparent; */
            }

            display:flex;
            align-items: center;
            gap:25px;
          
            @media(max-width:615px){
                gap:10px;
                }

            span{
                font-size:13px;
                font-weight:100;
                color:${({ theme }) => theme.colors.grayText1};

                @media(max-width:615px){
                    display:none;
                }
            }

            p{
                font-weight:bold;
                width:5.25rem;

                
                @media(max-width:615px){
                    width:2.5rem;
                }
            }
        }

        .item-des{
            p{
                margin:3px 0;
                display:flex;
                align-items:center;
                /* justify-content:center; */

                :nth-child(2){
                    font-size: 14px;
                    color:${({ theme }) => theme.colors.grayText1};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 300px;
                    
                    @media(max-width:780px){
                        display: flex;
                        flex-wrap: wrap;
                        white-space:normal;
                    }

                }
            }


        }
    }

    .img-div{
position:relative;
width:100%;
height:60px;
width:60px;

@media(max-width:780px){
    display:none;
}

}
}
.product-list{
    background-color:${({ theme }) => theme.colors.whiteLight1};
    border-radius:4px;
    height:900px;
     /* width:100%; */
     @media(max-width:1355px){
        max-width:39rem;
    } 
     @media(max-width:1209px){
        max-width:100%;
    } 
    .product-list-item{
        border-bottom:1px solid  #E0E0E0;
        border-top:1px solid  #E0E0E0;
        height:6.25rem;
        display:flex !important;
        width:100%;
        align-items: center;
        flex-direction:row;
        justify-content:space-between;

        .product-img-list{
            display:flex;
            gap:36px;
            align-items:center;
        }
    }
}

.basket-side{
    background-color:${({ theme }) => theme.colors.whiteLight1};
    border-radius:4px;
    height:35rem;
    box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);

    @media(max-width:1209px){
        display:none;
    }
       
h1{
display:none;
}
    .jTNrSQ {
         max-height: 570px;
         overflow: hidden;
        }

    .main{
        height:400px;
        
        .user_basket_main{
            margin:10px 0;
        }

        .img_conatiner {
      width: 45px;
      height: 45px;
    }

    .basket_conetent h2,h5{
        font-size:1rem;
    }

    .basket_conetent{
        align-items:center;
    }

    .order_buttons_group{
        height:5rem;
    }

    }

    .basket_footer{
        @media(max-width:1320px){
            .prize{
                width:20%;
                display:flex;
                align-items:center;
                justify-content:center;
            }
        }
    }

}
`

// export const ItemBasket = styled(UserBaskek)`

// `
