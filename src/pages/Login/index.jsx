import Icon from '../../components/Icon'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <main className="w-full h-full max-h-screen flex justify-center bg-white">
      <section className="w-full max-w-md h-full flex flex-col items-center justify-center px-8 py-6 relative login">
        <figure className="pb-6 logo">
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
          <input type="submit" className="w-full h-12 sm:h-14 mt-2 mb-2 rounded-xl font-medium text-base sm:text-lg cursor-pointer border-none bg-[#acd9b2] text-white button login__button" value="Login" />
        </form>
        <Link to="/password-recovery" className="mb-8 border-[#acd9b2] bg-white text-[#acd9b2] text-sm md:text-base decoration-0 hover:underline login__link">
          Forgot my password
        </Link>
        <Link to="/sign-up" className="flex justify-center items-center w-full h-12 sm:h-14 border-2 rounded-xl font-medium text-base sm:text-lg decoration-0 cursor-pointer border-[#acd9b2] bg-white text-[#acd9b2] hover:bg-[#acd9b2] hover:text-white button button__secondary">
          Sign up
        </Link>
      </section>
    </main>
  )
}

export default Login