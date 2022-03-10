import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
// import { Provider } from "react-redux";
// import { store } from "../store";
import Layout from "../share/components/Layout"
import { Header } from "../share/components/Header/Header"

const AppProvider = ({ children }) => {


    return (
        // <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Layout>
                {children}
            </Layout>
        </ThemeProvider >
        // </Provider>
    )
}
export default AppProvider