import { store } from "@/store/store"
import { Provider } from "react-redux"



const ReduxStoreProviders = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
export default ReduxStoreProviders