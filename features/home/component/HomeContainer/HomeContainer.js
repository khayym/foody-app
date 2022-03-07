import Grid from '@mui/material/Grid';
import MiniCard from '../MiniCard';

import { ButtonWrap } from "../../../../share/components/Button/Button.styled";
import { Wrap, ContentWrapper, Title, Desc, BtnWrapper, ImageWrapper, TopImage } from './HomeContainer.styled';

const HomeContainer = () => {
    return (
        <>
            <Wrap>
                <Grid lg={7}>
                    <ContentWrapper>
                        <Title>Our Food site makes it easy to find local food</Title>
                        <Desc>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Desc>
                        <BtnWrapper>
                            <ButtonWrap>Register</ButtonWrap>
                            <ButtonWrap>Order now</ButtonWrap>
                        </BtnWrapper>
                    </ContentWrapper>
                </Grid>

                <Grid lg={5}>
                    <ImageWrapper>
                        <TopImage src='/images/burger.svg' alt='burger' width='730' height='750' />
                        <MiniCard left="245" top="-30" />
                        <MiniCard left="-70" top="165" />
                        <MiniCard left="245" top="320" />
                    </ImageWrapper>
                </Grid>
            </Wrap>
        </>
    );

};

export default HomeContainer;