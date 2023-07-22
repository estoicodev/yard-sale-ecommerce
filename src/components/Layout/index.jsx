import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Main from '../Main'
import { Navigate } from "react-router-dom"

function Layout() {
  
  if (localStorage.getItem("authenticated") !== null) {
    return (
      <div className="flex flex-col min-h-screen bg-white/80">
        <Header />
        <Main >
          <Outlet />
        </Main>
      </div>
    )
  } else {
    return <Navigate replace to="/login" />
  }
}

export default Layout