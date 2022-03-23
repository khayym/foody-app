import styled from 'styled-components';


export const ScreenCardsContainer = styled.div`

height:45rem;
display:flex;
margin-top:10rem;
justify-content: space-between;
flex-direction: ${({ rev }) => rev === 'true' ? 'row-reverse' : 'row'};
@media(max-width:900px){
    flex-direction:column;
    justify-content: center;
    height:auto;
}

img{
    object-fit: contain !important;
    transform: rotate(-20deg);

    @media(max-width:900px){
        width: 282px !important;
        height:200px !important;
        transform: rotate(-10deg);
        margin: 2rem 0rem;
        
    }
}


.card-text-con{
    width:100%;
}

.card-img{
    display:flex;
    height:100%;
    width:100%;
    padding-right:9rem;

    @media (max-width: 900px){
        padding:0 2rem;
        align-items:center;
        justify-content:center;
        height:22rem;
    }
 
}

.rot{
    background-color:${({ theme }) => theme.colors.mainRed};
    transform: rotate(20deg) translateX(180px);
    border-radius: 50px;
    width:421.31px;
    height:556.74px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;  

    @media(max-width:900px){
        width: 100% !important;
        transform: rotate(10deg);
        width:250.27px !important;
        height:300.72px;
    } 
}


.text-head{
    font-weight: 900;
    font-size: 50px;
    color: ${({ theme }) => theme.colors.black};

    @media(max-width:900px){
        text-align: center;
    }
}

.card-text{
font-weight: 400;
font-size: 22px;
color: ${({ theme }) => theme.colors.grayText1};
margin-top:1.875rem;
@media(max-width:900px){
        text-align: center;
        height:18rem;
    }
}
`