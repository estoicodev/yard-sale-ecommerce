import { useContext } from "react"
import { OnlineStoreContext } from "./useOnlineStore"

const useOnlineStore = () => useContext(OnlineStoreContext);

export { useOnlineStore }