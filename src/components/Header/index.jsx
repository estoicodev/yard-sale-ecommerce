import { NavLink } from "react-router-dom"
import { useState } from "react"
import Icon from "../Icon";
import { useOnlineStore } from "../../contexts";

function Header() {
  const { countCartProducts, toggleCart } = useOnlineStore(); 

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const [isAllActive, setIsAllActive] = useState(true);
  const [isElectronicsActive, setIsElectronicsActive] = useState(false);
  const [isJewelryActive, setIsJewelryActive] = useState(false);
  const [isMensClothingActive, setIsMensClothingActive] = useState(false);
  const [isWomensClothingActive, setIsWomensClothingActive] = useState(false);

  const allNavInactive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(false);
    setIsJewelryActive(false);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(false);
    setIsProfileMenuOpen(false);
  }

  const onlyAllActive = () => {
    setIsAllActive(true);
    setIsElectronicsActive(false);
    setIsJewelryActive(false);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(false);
  }
  const onlyElectronicsActive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(true);
    setIsJewelryActive(false);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(false);
  }
  const onlyJewelryActive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(false);
    setIsJewelryActive(true);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(false);
  }
  const onlyMensClothingActive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(false);
    setIsJewelryActive(false);
    setIsMensClothingActive(true);
    setIsWomensClothingActive(false);
  }
  const onlyWomensClothingActive = () => {
    setIsAllActive(false);
    setIsElectronicsActive(false);
    setIsJewelryActive(false);
    setIsMensClothingActive(false);
    setIsWomensClothingActive(true);
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleMenuMobile = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  };

  const closeAllMenus = () => {
    setIsProfileMenuOpen(false);
    setIsMenuMobileOpen(false);
  };

  const headerDesktopNavLinkStyle = `py-2 px-3 rounded-xl decoration-0 border hover:text-[#acd9b2]`;

  return (
    <header>
      <nav className={`${isMenuMobileOpen ? "fixed" : "hidden"} lg:hidden w-full h-full my-0 mx-auto bg-white z-10 shadow-md overflow-y-auto`}>
        <ul className="mt-16 mb-10 text-base font-bold">
          <li className="pl-8 py-5">CATEGORIES</li>
          <li className="py-0 px-0">
            <NavLink className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100" onClick={() => closeAllMenus()} to="/">All</NavLink>
          </li>
          <li className="py-0 px-0">
            <NavLink className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100" onClick={() => closeAllMenus()} to="/electronics">Electronics</NavLink>
          </li>
          <li className="py-0 px-0">
            <NavLink className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100" onClick={() => closeAllMenus()} to="/jewelry">Jewelry</NavLink>
          </li>
          <li className="py-0 px-0">
            <NavLink className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100" onClick={() => closeAllMenus()} to="/mens-clothing">Men&apos;s clothing</NavLink>
          </li>
          <li className="py-0 px-0 pb-10">
            <NavLink className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100" onClick={() => closeAllMenus()} to="/womens-clothing">Women&apos;s clothing</NavLink>
          </li>
          <div className="pt-10 ml-8 mr-8 border-t border-solid border-t-gray-300">
            <li className="pb-0">
              <NavLink className="inline-block w-full py-6 px-0 hover:underline hover:underline-offset-2" onClick={() => closeAllMenus()} to="/my-orders">My orders</NavLink>
            </li>
            <li className="pb-4">
              <NavLink className="inline-block w-full py-6 px-0 hover:underline hover:underline-offset-2" onClick={() => closeAllMenus()} to="/my-account">My account</NavLink>
            </li>
            <li className="pb-1">
              <NavLink className="text-[#acd9b2] text-base hover:underline hover:underline-offset-2" to="/login" >Sign out</NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <nav className="w-full h-14 flex items-center bg-white fixed z-50 shadow-sm">
        <ul className="flex justify-between items-center relative w-full max-w-7xl h-full my-0 mx-auto py-0 pl-5" >
          <li className="flex items-center list-none lg:hidden">
            <div href="./screens/menu-mobile.html">
              <Icon type="menu" color="#000" onClick={() => toggleMenuMobile()} pointer/>
            </div>
          </li>
          <div className="flex justify-center items-center">
            <li>
              <NavLink to="/">
                <Icon type="logo" color="#ACD9B2" sizeType="sm"/>
              </NavLink>
            </li>
            <ul className="hidden lg:flex gap-4 ml-8 xl:ml-24 text-base" id="categories-list">
              <li className="inline-flex"><NavLink onClick={onlyAllActive} className={`${isAllActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`} to="/">All</NavLink></li>
              <li className="inline-flex"><NavLink onClick={onlyElectronicsActive} className={`${isElectronicsActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`} to="/electronics">Electronics</NavLink></li>
              <li className="inline-flex"><NavLink onClick={onlyJewelryActive} className={`${isJewelryActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`} to="/jewelry">Jewelry</NavLink></li>
              <li className="inline-flex"><NavLink onClick={onlyMensClothingActive} className={`${isMensClothingActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`} to="/mens-clothing">Men&apos;s clothing</NavLink></li>
              <li className="inline-flex"><NavLink onClick={onlyWomensClothingActive} className={`${isWomensClothingActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`} to="/womens-clothing">Women&apos;s clothing</NavLink></li>
            </ul>
          </div>
          <div className="flex justify-center items-center h-full">
            <li className="h-full hidden lg:flex items-center cursor-pointer mr-2" onClick={() => toggleProfileMenu()}>
              <span className="text-gray-400 text-sm pr-2">estoicodev@gmail.com</span>
              <Icon type="downArrow" size={3}/>
            </li>
            <button className="h-full px-5 relative cursor-pointer" onClick={() => toggleCart()}>
              <Icon type="shoppingCart" />
              <div className="w-4 h-4 text-sm font-bold bg-[#ACD9B2] rounded-full flex justify-center items-center absolute top-2 right-3">{countCartProducts}</div>
            </button>
          </div>
          <div className={`hidden z-20 shadow-lg bg-white rounded-b ${isProfileMenuOpen ? "lg:block": ""} lg:absolute top-[50px] right-16`}>
            <ul className="mt-6 mx-5 mb-0">
              <li className="pb-8 pl-9 pr-2 text-base font-semibold list-none text-right">
                <NavLink className="text-[#232830] hover:underline hover:underline-offset-2" onClick={() => allNavInactive()} to="/my-orders">My orders</NavLink>
              </li>
              <li className="pb-8 pl-9 pr-2 text-base font-semibold list-none text-right border-b border-b-slate-200">
                <NavLink className="text-[#232830] hover:underline hover:underline-offset-2" onClick={() => allNavInactive()} to="/my-account">My account</NavLink>
              </li>
              <li className="pb-8 pl-9 pr-2 text-base font-semibold list-none text-right pt-5">
                <NavLink className="text-[#ACD9B2] hover:underline hover:underline-offset-2 text-sm" onClick={() => allNavInactive()} to="/login">Sign out</NavLink>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header