import { Grid } from '@material-ui/core';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../../../../share/components/Layout'))

import { Bgimg,Split, ContentWrapper, Wrap, Title, Desc, ImgWrapper, CustomImage } from './HomeProduct.styled.js';
const HomeProduct = ({title,desc,order}) => {
    return (
        <>
            <Layout>
                <Wrap>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center" >
                        <Split order={order}>
                            <ContentWrapper>
                                <Title>{title}</Title>
                                <Desc>{desc}</Desc>
                            </ContentWrapper>
                        </Split>
                        <Split >
                            <ImgWrapper>
                                <Bgimg />
                                <CustomImage src='/images/burger.svg' />
                            </ImgWrapper>
                        </Split>
                    </Grid>
                </Wrap>
            </Layout>

        </>
    );
};

export default HomeProduct;