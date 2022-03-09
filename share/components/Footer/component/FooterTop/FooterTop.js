import Image from 'next/image';
import { ButtonWrap } from '../../../Button/Button.styled';
import { Wrapper, LeftImg, CenterWrap, Title, RightImg } from './FooterTop.styled'
const FooterTop = () => {
    return (
        <>
            <Wrapper>
                <LeftImg>
                    <Image src='/images/burger.svg' width='200' height='200' />
                </LeftImg>
                <CenterWrap>
                    <Title>Discover Restaurants Near From you</Title>
                    <ButtonWrap>Explore now</ButtonWrap>
                </CenterWrap>
                <RightImg>
                    <Image src='/images/burger.svg' width='200' height='200' />
                </RightImg>
            </Wrapper>
        </>
    );
};

export default FooterTop;