import { Link } from 'react-router-dom'
import Icon from '../../components/Icon'

function PasswordRecovery() {
  return (
    <main className="w-full h-full max-h-screen flex justify-center bg-white">
      <section className="w-full max-w-md h-full px-8 py-6 md:py-14 flex flex-col items-center justify-center login">
        <figure className="pb-8 logo">
          <Icon type="logo" color="#acd9b2" sizeType="lg"/>
        </figure>
        <h1 className="mb-4 text-base xs:text-lg font-bold color-black title">Password recovery</h1>
        <p className="mb-6 text-[#c7c7c7] text-sm xs:text-base font-medium text-center subtitle">
          Inform the email address used to create your account
        </p>
        <form action="./" className="w-full flex flex-col login__form">
          <label htmlFor="email" className="mb-2 text-sm sm:text-base font-bold login__label">Email address</label>
          <input
            className="h-11 mb-6 px-3 border-none rounded-lg bg-[#f7f7f7] text-[#c7c7c7] text-base font-normal outline-none login__input"
            type="email"
            id="email"
            autoComplete="email"
            required
          />
          <input type="submit" className="w-full h-12 sm:h-14 flex justify-center items-center mb-8 border-none rounded-lg bg-[#acd9b2] text-white text-base sm:text-lg font-medium cursor-pointer hover:bg-opacity-80 login__button" value="Send email" />
        </form>
        <Link to="/login" className="text-[#acd9b2] text-sm font-medium decoration-0 hover:underline login__link">
          Back to log in
        </Link>
      </section>
    </main>
  )
}

export default PasswordRecovery