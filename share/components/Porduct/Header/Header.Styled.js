import styled from 'styled-components'

export const ImageWrapper = styled.div`
width:100%;

.img-div{
    position:relative;
    width:100%;
    height:25rem;


}

.information-container{
    display:flex;
    justify-content:space-between;

    @media(max-width:900px){
        flex-direction:column;
        padding:0 22px;
    }
}

.left-side{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:4rem;
    
}
.button-group{
    display:flex;
    
   .btn-out{
       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;
       background-color:#fff;
       color:${({ theme }) => theme.colors.mainRed};
       margin-right:1.75rem;

       &:hover{
          color:#fff;
       }

       @media(max-width:900px){
        margin-right:0rem;
    }
   }

   .btn-filled{
       background-color:${({ theme }) => theme.colors.mainRed};
       color:#fff;
       @media(max-width:900px){
        display:none;
    }
   }

   button{
       border: 1px solid #D63626;
       border-radius:5px;
       height:3.25rem;
       cursor: pointer;
        transition: all 0.3s;
       &:hover{
           background-color:${({ theme }) => theme.colors.lightRed}
       }
   }
}

.cuisine-div{
    p{
        line-height:0rem;
    }
   &:first-child{
       font-size:1.125rem;
       color:${({ theme }) => theme.colors.grayText1};
   }
    div{
        display:flex;
        gap:.625rem;
        font-weight: 500;
        font-size: .875rem;
        color:${({ theme }) => theme.colors.grayText1};
     
        @media(max-width:900px){
        flex-wrap:wrap;

        p{
            line-height:0px;
            margin:5px 0;
        }
    }
    }
}

.header-info{
    margin-left:57px;
    @media(max-width:900px){
        margin-left:0px;
    }

  .name{
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.03em;
    color: ${({ theme }) => theme.colors.grayText2};
    line-height:0px;
  }

  .address{
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grayText1}
  }

}
`
