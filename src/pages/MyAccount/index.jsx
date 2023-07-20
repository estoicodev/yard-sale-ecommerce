import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function MyAccount({ userInfo }) {
  return (
    <section className="w-full max-w-sm h-full mx-auto flex flex-col py-10 relative login">
      <h1 className="text-black font-bold text-lg text-start mb-10 title">My account</h1>
      <form action="" className="w-full flex flex-col login__form">
        <label htmlFor="name" className="mb-4 text-base font-bold login__label">Name</label>
        <p className="h-12 sm:h-14 mb-5 text-[#c7c7c7] text-base font-normal value">{userInfo.name}</p>
        <label htmlFor="email" className="mb-4 text-base font-bold login__label">Email address</label>
        <p className="h-12 sm:h-14 mb-5 text-[#c7c7c7] text-base font-normal value">{userInfo.email}</p>
        <label htmlFor="password" className="mb-4 text-base font-bold login__label">Password</label>
        <p className="h-12 sm:h-14 mb-5 text-[#c7c7c7] text-base font-normal value">**********</p>
        <Link to="/edit-account" className="flex justify-center items-center w-full h-12 sm:h-14 border-2 rounded-xl font-medium text-base sm:text-lg decoration-0 cursor-pointer border-[#acd9b2] bg-white text-[#acd9b2] hover:bg-[#acd9b2] hover:text-white button button__secondary">Edit</Link>
      </form>
    </section>

  )
}

MyAccount.propTypes = {
  userInfo: PropTypes.object.isRequired,
}

export default MyAccount