import Container from '@mui/material/Container';
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'
const Layout = ({ children }) => {
    return (
        <>

            <StyledLayoutComponent>
                <Header />
                {children}
            </StyledLayoutComponent>
            <Footer />
        </>
    );
};

export default Layout;

const StyledLayoutComponent = styled.div`
    width:100%;
    padding:1rem 1rem 0 1rem !important;

    @media(max-width:756px){
        padding:0 !important;
    }
`