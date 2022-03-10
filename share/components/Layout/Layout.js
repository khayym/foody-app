import Container from '@mui/material/Container';
import styled from 'styled-components'
const Layout = ({ children }) => {
    return (
        <>
            <StyledLayoutComponent maxWidth="xl" >
                {/* <Header /> */}
                {/* <Main> */}
                {children}
                {/* </Main> */}
            </StyledLayoutComponent>

        </>
    );
};

export default Layout;

const StyledLayoutComponent = styled(Container)`
    width:100%;
    padding:0 !important;
`