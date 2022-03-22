import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
import Layout from "../share/components/Layout"
import { Provider } from 'react-redux'
import { store } from "../share/store";


const AppProvider = ({ children }) => {


    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout>
                    {children}
                </Layout>
            </ThemeProvider >
        </Provider>
    )
}
export default AppProvider