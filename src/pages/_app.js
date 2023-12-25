import AppLayout from '../components/Layout/AppLayout'
import FloorLayout from '../components/Layout/FloorLayout'
// import '../css/app.scss'
// import '../css/ka.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { createContext } from 'react'
import { CartProvider } from '@/context/CartContext'
export const AppContext = createContext(null)

const App = ({ Component, pageProps, navigation }) => {
    const appData = { navigation }
    const cart = {}

    return (
        // <SSRProvider> // todo : check this ...
            <AppContext.Provider value={(appData, cart)}>
                <CartProvider>
                    <AppLayout>
                        <Component {...pageProps}></Component>
                    </AppLayout>
                </CartProvider>
            </AppContext.Provider>
        // </SSRProvider>
    )
}

export default App
