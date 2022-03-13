import styled from "styled-components";
import Image from 'next/image';


export const Wrapper = styled.div``
export const CustomImage = styled(Image)`

`

export const TextWrapper = styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`
export const Text = styled.div`
width: 80%;
@media (max-width: 575.9px) {
    width: 90%;
}
`

export const Title = styled.h5`
    font-weight: 600;
    font-size: 45px;
    line-height: 25px;
    padding: 0;
    margin-top: 50px;
    margin-bottom: 30px;
`
export const Desc = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    @media (max-width: 375.9px) {
    margin-bottom: 63px;
}
`
export const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 20px 0px;
`
export const BgImg = styled.div`
    width: 903px;
    height: 407px;
    background-color: ${({ theme }) => theme.colors.orange};
    box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    transform: rotate(-170.57deg);
    position: absolute;
    margin: 0 auto;

@media (max-width: 991.9px) {
    width: 90%;
    transform: rotate(0deg);
}
@media (max-width: 767.9px) {
    top: auto;
}

`