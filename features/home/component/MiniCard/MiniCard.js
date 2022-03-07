import { Wrapper, TextWrap, ImageWrap, Yummy } from './MiniCard.styled'

const MiniCard = ({ left, top }) => {
    return (
        <>
            <Wrapper left={left} top={top}>
                <ImageWrap src='/images/burger.svg' width='70px' height='50px' />
                <TextWrap>
                    French Fries
                    <Yummy>Yummy ...</Yummy>
                </TextWrap>
            </Wrapper>
        </>
    );
};

export default MiniCard;