import { NavLink } from "react-router-dom"
import Icon from "../Icon";
import { useOnlineStore } from "../../contexts";

function Header() {
  const {
    countCartProducts,
    toggleCart,
    toggleMenuMobile,
    toggleProfileMenu,
    closeAllMenus,
    isMenuMobileOpen,
    isProfileMenuOpen,
    isAllActive,
    isElectronicsActive,
    isJewelryActive,
    isMensClothingActive,
    isWomensClothingActive,
    onlyAllActive,
    onlyElectronicsActive,
    onlyJewelryActive,
    onlyMensClothingActive,
    onlyWomensClothingActive,
    allNavInactive,
    setIsProfileMenuOpen,
    setIsMenuMobileOpen,
    setIsCartOpen,
    isNavActive,
    setIsNavActive,
    userAccount,
  } = useOnlineStore();

  const handleClickCart = () => {
    toggleCart();
    setIsProfileMenuOpen(false);
    setIsMenuMobileOpen(false);
  }

  const handleClickMenuProfile = () => {
    toggleProfileMenu();
    setIsMenuMobileOpen(false);
    setIsCartOpen(false);
  }

  const handleClickMenuMobile = () => {
    toggleMenuMobile();
    setIsProfileMenuOpen(false);
    setIsCartOpen(false);
  }

  const handleClickMenuItemCategory = (category) => {
    closeAllMenus();
    setIsNavActive(true);
    if (category === "all") {
      onlyAllActive();
    } else if (category === "electronics") {
      onlyElectronicsActive();
    } else if (category === "jewelry") {
      onlyJewelryActive();
    } else if (category === "mens-clothing") {
      onlyMensClothingActive();
    } else if (category === "womens-clothing") {
      onlyWomensClothingActive();
    }
  }

  const handleSignOut = () => {
    localStorage.removeItem("authenticated");
    localStorage.setItem("currentUser", "{}");
    allNavInactive();
  }

  const headerDesktopNavLinkStyle = `py-2 px-3 rounded-xl decoration-0 border hover:text-[#acd9b2]`;

  return (
    <header>
      <nav className={`${isMenuMobileOpen ? "fixed" : "hidden"} lg:hidden w-full h-full my-0 mx-auto bg-white z-10 shadow-md overflow-y-auto`}>
        <ul className="mt-16 mb-10 text-base font-bold">
          <li className="pl-8 py-5">CATEGORIES</li>
          <li className="py-0 px-0">
            <NavLink
              className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100"
              onClick={() => handleClickMenuItemCategory("all")}
              to="/">All
            </NavLink>
          </li>
          <li className="py-0 px-0">
            <NavLink
              className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100"
              onClick={() => handleClickMenuItemCategory("electronics")}
              to="/electronics">Electronics
            </NavLink>
          </li>
          <li className="py-0 px-0">
            <NavLink
              className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100"
              onClick={() => handleClickMenuItemCategory("jewelry")}
              to="/jewelry">Jewelry
            </NavLink>
          </li>
          <li className="py-0 px-0">
            <NavLink
              className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100"
              onClick={() => handleClickMenuItemCategory("mens-clothing")}
              to="/mens-clothing">Men&apos;s clothing
            </NavLink>
          </li>
          <li className="py-0 px-0 pb-10">
            <NavLink
              className="pl-8 inline-block w-full py-6 px-0 hover:bg-gray-100"
              onClick={() => handleClickMenuItemCategory("womens-clothing")}
              to="/womens-clothing">Women&apos;s clothing
            </NavLink>
          </li>
          <div className="pt-10 ml-8 mr-8 border-t border-solid border-t-gray-300">
            <li className="pb-0">
              <NavLink
                className="inline-block w-full py-6 px-0 hover:underline hover:underline-offset-2"
                onClick={() => allNavInactive()}
                to="/my-orders">My orders
              </NavLink>
            </li>
            <li className="pb-4">
              <NavLink
                className="inline-block w-full py-6 px-0 hover:underline hover:underline-offset-2"
                onClick={() => allNavInactive()}
                to="/my-account">My account
              </NavLink>
            </li>
            <li className="pb-1">
              <NavLink
                className="text-[#acd9b2] text-base hover:underline hover:underline-offset-2"
                onClick={() => handleSignOut()}
                to="/login" >Sign out
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <nav className="w-full h-14 flex items-center bg-white fixed z-50 shadow-sm">
        <ul className="flex justify-between items-center relative w-full max-w-7xl h-full my-0 mx-auto py-0 pl-5" >
          <li className="flex items-center list-none lg:hidden">
            <div>
              <Icon type="menu" color="#000" onClick={() => handleClickMenuMobile()} pointer/>
            </div>
          </li>
          <div className="flex justify-center items-center">
            <li>
              <a href="./">
                <Icon type="logo" color="#ACD9B2" sizeType="sm"/>
              </a>
            </li>
            <ul className="hidden lg:flex gap-4 ml-8 xl:ml-24 text-base" id="categories-list">
              <li className="inline-flex">
                <NavLink
                  onClick={() => handleClickMenuItemCategory("all")}
                  className={`flex text-center items-center ${isNavActive && isAllActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`}
                  to="/">
                    All
                </NavLink>
              </li>
              <li className="inline-flex">
                <NavLink
                  onClick={() => handleClickMenuItemCategory("electronics")}
                  className={`flex text-center items-center ${isNavActive && isElectronicsActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`}
                  to="/electronics">
                    Electronics
                </NavLink>
              </li>
              <li className="inline-flex">
                <NavLink
                  onClick={() => handleClickMenuItemCategory("jewelry")}
                  className={`flex text-center items-center ${isNavActive && isJewelryActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`}
                  to="/jewelry">
                    Jewelry
                </NavLink>
              </li>
              <li className="inline-flex">
                <NavLink
                  onClick={() => handleClickMenuItemCategory("mens-clothing")}
                  className={`flex text-center items-center ${isNavActive && isMensClothingActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`}
                  to="/mens-clothing"> 
                  Men&apos;s clothing
                </NavLink>
              </li>
              <li className="inline-flex">
                <NavLink
                  onClick={() => handleClickMenuItemCategory("womens-clothing")}
                  className={`flex text-center items-center ${isNavActive && isWomensClothingActive ? "text-[#acd9b2] border-[#acd9b2]" : "text-[#c7c7c7] border-transparent"} ${headerDesktopNavLinkStyle}`}
                  to="/womens-clothing"> 
                  Women&apos;s clothing
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center h-full">
            <li className="h-full hidden lg:flex items-center cursor-pointer mr-2" onClick={() => handleClickMenuProfile()}>
              <span className="text-gray-400 text-xs xl:text-sm pr-2">{userAccount.email}</span>
              <Icon type="downArrow" size={3}/>
            </li>
            <button className={`h-full px-5 relative cursor-pointer`} onClick={() => handleClickCart()}>
              <Icon type="shoppingCart" />
              <div className="w-4 h-4 text-sm font-bold bg-[#ACD9B2] rounded-full flex justify-center items-center absolute top-2 right-3">{countCartProducts}</div>
            </button>
          </div>
          <div className={`hidden z-20 shadow-lg bg-white rounded-b ${isProfileMenuOpen ? "lg:block": null} lg:absolute top-[50px] right-16`}>
            <ul className="mt-6 mx-5 mb-0">
              <li className="pb-8 pl-9 pr-2 text-base font-semibold list-none text-right">
                <NavLink className="text-[#232830] hover:underline hover:underline-offset-2" onClick={() => allNavInactive()} to="/my-orders">My orders</NavLink>
              </li>
              <li className="pb-8 pl-9 pr-2 text-base font-semibold list-none text-right border-b border-b-slate-200">
                <NavLink className="text-[#232830] hover:underline hover:underline-offset-2" onClick={() => allNavInactive()} to="/my-account">My account</NavLink>
              </li>
              <li className="pb-8 pl-9 pr-2 text-base font-semibold list-none text-right pt-5">
                <NavLink className="text-[#ACD9B2] hover:underline hover:underline-offset-2 text-sm" onClick={() => handleSignOut()} to="/login">Sign out</NavLink>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header