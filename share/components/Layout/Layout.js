import Container from '@mui/material/Container';
const Layout = ({ children }) => {
    return (
        <>
            <Container maxWidth="xl" >
                {/* <Header /> */}
                {/* <Main> */}
                {children}
                {/* </Main> */}
            </Container>

        </>
    );
};

export default Layout;