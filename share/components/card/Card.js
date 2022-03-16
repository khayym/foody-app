import Image from "next/image";
import { Wrapper, Wrap, ImageWrap, ContentWrap, Title, Desc } from './Card.syled'
const Card = ({title,desc}) => {
    return (
        <>
            <Wrap>
                <Wrapper>
                    <ImageWrap>
                        <Image src='/images/burger.svg' width='239' height='223' />
                    </ImageWrap>
                    <ContentWrap>
                        <Title>{title}</Title>
                        <Desc>{desc}</Desc>
                    </ContentWrap>
                </Wrapper>
            </Wrap>
        </>
    );
};

export default Card;