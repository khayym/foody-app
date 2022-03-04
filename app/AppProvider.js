import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
// import { Provider } from "react-redux";
// import { store } from "../store";

const AppProvider = ({ children }) => {
    return (
        // <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider >
        // </Provider>
    )
}
export default AppProvider