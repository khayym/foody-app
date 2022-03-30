import AppProvider from '../app/AppProvider'
import '../styles/globals.css'
import styled from 'styled-components'
import { AuthContextProvider } from '../src/context/AuthContext'
import { Fuego, FuegoProvider } from 'swr-firestore-v9'
import { firebaseConfig } from '../src/config/firebase'

const fuego = new Fuego(firebaseConfig)

function MyApp({ Component, pageProps }) {
  return (
    <AppContainer>
      <AuthContextProvider>
        <FuegoProvider fuego={fuego}>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider >
        </FuegoProvider>
      </AuthContextProvider>
    </AppContainer>
  )
}

export default MyApp


const AppContainer = styled.div`
  /* margin:1rem; */
  
  @media (max-width:756px) {
    margin:0;
  }
  `