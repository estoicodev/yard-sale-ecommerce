import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useState } from "react"

function EditAccount({ updateUserInfo }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="w-full max-w-sm h-full mx-auto flex flex-col py-10 relative login">
      <h1 className="text-black font-bold text-lg text-start mb-10 title">My account</h1>
      <form action="" className="w-full flex flex-col login__form">
        <label htmlFor="name" className="mb-4 text-base font-bold login__label">Name</label>
        <input onChange={(e) => setName(e.target.value)} className="h-11 sm:h-12 mb-5 px-4 text-[#a3a3a3] bg-[#f7f7f7] rounded-lg border-none text-base font-normal outline-0 outline-transparent focus:outline-1 focus:outline-offset-1 focus:outline-[#c7c7c7] hover:bg-opacity-80 value" />
        <label htmlFor="email" className="mb-4 text-base font-bold login__label">Email address</label>
        <input onChange={(e) => setEmail(e.target.value)} className="h-11 sm:h-12 mb-5 px-4 text-[#a3a3a3] bg-[#f7f7f7] rounded-lg border-none text-base font-normal outline-0 outline-transparent focus:outline-1 focus:outline-offset-1 focus:outline-[#c7c7c7] hover:bg-opacity-80 value" />
        <label htmlFor="password" className="mb-4 text-base font-bold login__label">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="h-11 sm:h-12 mb-11 px-4 text-[#a3a3a3] bg-[#f7f7f7] rounded-lg border-none text-base font-normal outline-0 outline-transparent focus:outline-1 focus:outline-offset-1 focus:outline-[#c7c7c7] hover:bg-opacity-80 value" />
        <Link to="/" onClick={() => updateUserInfo({ name, email, password })} className="flex justify-center items-center w-full h-12 sm:h-14 border-2 rounded-xl font-medium text-base sm:text-lg decoration-0 cursor-pointer border-none bg-[#acd9b2] text-white hover:bg-opacity-80 button button__secondary">
          Save
        </Link>
      </form>
    </section>

  )
}

EditAccount.propTypes = {
  updateUserInfo: PropTypes.func.isRequired,
}


export default EditAccount