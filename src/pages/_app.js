import AppLayout from '../components/Layout/AppLayout'
import FloorLayout from '../components/Layout/FloorLayout'
// import '../css/app.scss'
// import '../css/ka.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { createContext } from 'react'
export const AppContext = createContext(null)

const App = ({ Component, pageProps, navigation }) => {
    const appData = { navigation }
    const cart = {}

    return (
        <SSRProvider>
            <AppContext.Provider value={(appData, cart)}>
                <AppLayout>
                    <Component {...pageProps}></Component>
                </AppLayout>
            </AppContext.Provider>
        </SSRProvider>
    )
}

export default App
