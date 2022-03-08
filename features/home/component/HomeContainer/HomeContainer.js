import Grid from '@mui/material/Grid';
import MiniCard from '../MiniCard';

import { ButtonWrap } from "../../../../share/components/Button/Button.styled";
import {
    Wrap, ContentWrapper, Title, Desc, BtnWrapper, ImageWrapper, TopImage,
    Features, FeatureContent, FeaturTitle, FeaturDesc, FeatureCard, Text,
    ProductWrapper
} from './HomeContainer.styled';
import Card from '../../../../share/components/card/Card';
import HomeProduct from '../HomeProduct/HomeProduct';

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

            <Features>
                <FeatureContent>
                    <FeaturTitle>Features</FeaturTitle>
                    <FeaturDesc>
                        <Text>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                        </Text>
                    </FeaturDesc>
                </FeatureContent>
                <FeatureCard>
                    <Card
                        title="Discount Boucher"
                        desc="Lorem ipsum is placeholder  commonly used in the graphic"
                    />
                    <Card
                        title="Fresh healthy Food"
                        desc="Lorem ipsum is placeholder  commonly used in the graphic"
                    />
                    <Card
                        title="Fast Home Delivery"
                        desc="Lorem ipsum is placeholder  commonly used in the graphic"
                    />
                </FeatureCard>
            </Features>

            <Features>
                <FeatureContent>
                    <FeaturTitle>Our Popular Update New Foods</FeaturTitle>
                    <FeaturDesc>
                        <Text>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                        </Text>
                    </FeaturDesc>
                </FeatureContent>
                <FeatureCard>
                    <Card
                        title="Dubble Chees"
                        desc="Lorem ipsum is placeholder  commonly used in the graphic"
                    />
                    <Card
                        title="Margarita"
                        desc="Lorem ipsum is placeholder  commonly used in the graphic"
                    />
                    <Card
                        title="Twister Menu"
                        desc="Lorem ipsum is placeholder  commonly used in the graphic"
                    />
                </FeatureCard>
            </Features>

            <ProductWrapper>
                <HomeProduct
                    title='Menu That Always Make You Fall In Love'
                    desc='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.' />
                <HomeProduct
                    order='2'
                    title='Yummy Always Papa John’s Pizza.Agree?'
                    desc='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.' />
                <HomeProduct
                    title='Do You Like French Fries? Mmm...'
                    desc='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.' />
            </ProductWrapper>

        </>
    );

};

export default HomeContainer;