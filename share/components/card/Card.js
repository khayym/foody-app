import Image from "next/image";
import { Wrapper, Wrap, ImageWrap, ContentWrap, Title, Desc } from './Card.syled'
const Card = () => {
    return (
        <>
            <Wrap>
                <Wrapper>
                    <ImageWrap>
                        <Image src='/images/burger.svg' width='239' height='239' />
                    </ImageWrap>
                    <ContentWrap>
                        <Title>Discount Boucher</Title>
                        <Desc>Lorem ipsum is placeholder  commonly used in the graphic </Desc>
                    </ContentWrap>
                </Wrapper>
            </Wrap>
        </>
    );
};

export default Card;