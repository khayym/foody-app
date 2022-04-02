import Image from 'next/image';
import { Wrapper, LeftImg, CenterWrap, Title, RightImg, ButtonFooter } from './FooterTop.styled'
const FooterTop = () => {
    return (
        <>
            <Wrapper>
                <LeftImg>
                    <Image src='/images/burger2.svg' width='200' height='200' />
                </LeftImg>
                <CenterWrap>
                    <Title>Discover Restaurants Near From you</Title>
                    {/* <ButtonWrap>Explore now</ButtonWrap> */}
                    <ButtonFooter>Explore now</ButtonFooter>
                </CenterWrap>
                <RightImg>
                    <Image src='/images/burger.svg' width='200' height='200' />
                </RightImg>
            </Wrapper>
        </>
    );
};

export default FooterTop;