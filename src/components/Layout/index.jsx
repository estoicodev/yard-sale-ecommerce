import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Main from '../Main'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white/80">
      <Header />
      <Main >
        <Outlet />
      </Main>
    </div>
  )
}

export default Layout