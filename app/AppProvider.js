import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
import Layout from "../share/components/Layout"
import { Provider } from 'react-redux'
import { store } from "../share/store";
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', () => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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