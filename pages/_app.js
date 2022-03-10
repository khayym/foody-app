import AppProvider from '../app/AppProvider'
import '../styles/globals.css'
import styled from 'styled-components'
import { AuthContextProvider } from '../src/context/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    <AppContainer>
      <AuthContextProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider >
      </AuthContextProvider>
    </AppContainer>
  )
}

export default MyApp


const AppContainer = styled.div`
  margin:1rem;
  
  @media (max-width:756px) {
    margin:0;
  }
  `