import styled from 'styled-components';

export const HomeContainer = styled.div`
width:100%;
.homeHeader{
    
    /* height:45rem; */
    background-color: ${({ theme }) => theme.colors.whiteLight1};
    padding:4rem 5rem;
   

    @media (max-width:900px){
    display: flex; 
    flex-direction:column-reverse;
    padding:1rem .75rem;
    }
}

.gird-content{
    h1{
        font-size:60px;
        font-weight:900;
        @media (max-width:900px){
            font-size:1.4rem;
            text-align: center;
        }
    }

    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
        width: 510px;
        color: ${({ theme }) => theme.colors.grayText1}!important;
        @media (max-width:900px){
         display: none;
        }
    }
}

.button-group{
    display:flex;
    gap:2.1rem;
    margin-top:2.5rem;
    @media (max-width:900px){
         flex-direction:column !important;
         align-items: center;
         gap:1rem;
        }
    button{
        width: 220px;
        height: 70px;
        font-weight: 500;
        font-size: 25px;
        background-color: ${({ theme }) => theme.colors.mainRed}};

    }

    button:last-child{
        background-color: ${({ theme }) => theme.colors.whiteLight};
        color: ${({ theme }) => theme.colors.grayText1};
        border: 2px solid #828282;
    }

  
  .imgContainer{
      @media (max-width:900px){
          background-color:transparent !important;
          height:300px !important;
      }
  }


  main{
    margin:0 2rem;

      @media(max-width:800px){
        margin:0 0rem;
      }
  }
`
