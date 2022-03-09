import Container from '@mui/material/Container';
import Footer from '../Footer/FooterPage';
const Layout = ({ children }) => {
    return (
        <>
            <Container maxWidth="xl" >
                {/* <Header /> */}
                {/* <Main> */}
                {children}
                {/* </Main> */}
                <Footer />
            </Container>
        </>
    );
};

export default Layout;