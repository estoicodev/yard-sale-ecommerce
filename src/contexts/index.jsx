import { useContext } from "react"
import { OnlineStoreContext } from "./useOnlineShop"

const useOnlineStore = () => useContext(OnlineStoreContext);

export { useOnlineStore }