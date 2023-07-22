import Icon from '../../components/Icon'
import PropTypes from "prop-types"

function HeaderAuth({ headerText }) {
  return (
    <header>
      <nav className="w-full h-14 flex items-center bg-white z-50 shadow-sm">
        <ul className="flex justify-between items-center relative w-full max-w-7xl h-full my-0 mx-auto py-0 pl-5" >
          <li className="flex justify-center items-center">
            <Icon type="logo" color="#ACD9B2" sizeType="sm"/>
          </li>
          <li className="flex justify-center items-center h-full">
            <span className="underline underline-offset-2 text-gray-600 text-base font-medium pr-2">{headerText}</span>
            <button className={`h-full px-5 relative`} disabled>
              <Icon type="shoppingCart" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

HeaderAuth.propTypes = {
  headerText: PropTypes.string,
}

export default HeaderAuth