import { Grid } from '@material-ui/core';
import { Bgimg, Split, ContentWrapper, Wrap, Title, Desc, ImgWrapper, CustomImage } from './HomeProduct.styled.js';
const HomeProduct = ({ title, desc, order, img, transform }) => {
    return (
        <>
            <Wrap>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Split order={order}>
                        <ContentWrapper>
                            <Title>{title}</Title>
                            <Desc>{desc}</Desc>
                        </ContentWrapper>
                    </Split>
                    <Split >
                        <ImgWrapper>
                            <Bgimg transform={transform} />
                            <CustomImage src={img} />
                        </ImgWrapper>
                    </Split>
                </Grid>
            </Wrap>
        </>
    );
};

export default HomeProduct;