import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid } from '@mui/material';
import FooterList from './component/FooterList/FooterList';
import FooterTop from './component/FooterTop/FooterTop';
import { FooterWrapper, Desc, Logo, SosialNetwork, IconWrap, ListWrap, FooterStyle } from './FooterPage.styled'
import { useRouter } from "next/router"
const FooterPage = () => {
    let { pathname } = useRouter()


    const getFooterTop = () => {
        if (pathname === '/') {
            return (
                <FooterTop />
            )
        }
    }

    return (
        <>
            <FooterStyle pathname={pathname}>
                <FooterWrapper>
                    {getFooterTop()}
                    <Grid container>
                        <Grid lg={4} md={5} sm={12}>
                            <Logo>Foody.</Logo>
                            <Desc>Lorem ipsum is placeholder text commonly used in the graphic, </Desc>
                            <SosialNetwork>
                                <IconWrap>
                                    <FacebookOutlinedIcon />
                                </IconWrap>
                                <IconWrap>
                                    <InstagramIcon />
                                </IconWrap>
                                <IconWrap>
                                    <TwitterIcon />
                                </IconWrap>
                            </SosialNetwork>
                        </Grid>
                        <Grid lg={8} md={7}>
                            <ListWrap>
                                <FooterList />
                                <FooterList />
                                <FooterList />
                            </ListWrap>
                        </Grid>
                    </Grid>
                </FooterWrapper>
            </FooterStyle>
        </>
    );
};

export default FooterPage;