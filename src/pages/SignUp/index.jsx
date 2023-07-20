import Icon from '../../components/Icon'
import { NavLink } from 'react-router-dom'

function SignUp() {
  return (
    <main className="w-full h-full max-h-screen flex justify-center my-auto bg-white">
      <section className="w-full max-w-md h-full flex flex-col items-center justify-center px-8 py-6 relative login">
        <figure className="pb-3 logo">
          <Icon type="logo" color="#acd9b2" sizeType="lg"/>
        </figure>
        <form action="./" className="w-full flex flex-col py-5 login__form" autoComplete="on">
          <label htmlFor="email" className="mb-2 font-bold text-sm xs:text-base md:text-lg login__label">Email</label>
          <input
            type="email"
            className="h-11 mb-6 px-3 border-none rounded-xl bg-[#f7f7f7] text-[#c7c7c7] text-sm xs:text-base md:text-lg font-normal outline-none login__input"
            id="email"
            autoComplete="email"
            required
          />
          <label htmlFor="password" className="mb-2 font-bold text-sm xs:text-base md:text-lg  login__label">Password</label>
          <input
            type="password"
            className="h-11 mb-6 px-3 border-none rounded-xl bg-[#f7f7f7] text-[#c7c7c7] text-sm xs:text-base md:text-lg font-normal outline-none login__input"
            id="password"
            autoComplete="current-password"
            required
          />
        <label htmlFor="confirm-password" className="mb-2 font-bold text-sm xs:text-base md:text-lg  login__label">Confirm Password</label>
          <input
            type="password"
            className="h-11 mb-8 px-3 border-none rounded-xl bg-[#f7f7f7] text-[#c7c7c7] text-sm xs:text-base md:text-lg font-normal outline-none login__input"
            id="confirm-password"
            autoComplete="off"
            required
          />
          <input type="submit" className="w-full h-12 sm:h-14 mt-2 mb-2 rounded-xl font-medium text-base sm:text-lg cursor-pointer border-none bg-[#acd9b2] text-white button login__button" value="Create account" />
        </form>
        <p>
          <span className='pr-4'>I have an account</span>
          <NavLink to="/login" className="mb-8 border-[#acd9b2] bg-white text-[#acd9b2] font-semibold text-sm md:text-base decoration-0 hover:underline login__link">
            Login
          </NavLink>
        </p>
      </section>
    </main>
  )
}

export default SignUp