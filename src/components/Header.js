import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropdownloggedin } from "../Elements/Dropdownloggedin";
import { Dropedownloggedout } from "../Elements/Dropedownloggedout";
import LOGO from "../logo.png";
import { useSelector } from "react-redux";
import { Search } from "./Search";
export const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const [hidden, setHidden] = useState(false);

  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", JSON.stringify(true));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark", JSON.stringify(false));
    }
  }, [dark]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={LOGO} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setDark(!dark)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setHidden(!hidden)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cart.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
          </div>
        </div>
        {hidden && <Search sethidden={setHidden} />}
        {dropdown ? (
          sessionStorage.getItem("accessToken") ? (
            <Dropdownloggedin setdropdown={setDropdown} />
          ) : (
            <Dropedownloggedout setdropdown={setDropdown} />
          )
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};
