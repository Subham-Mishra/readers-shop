import { PiBookBookmarkFill } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 h-[4rem]">
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2">
          <PiBookBookmarkFill className="h-6 w-6 text-orange-500" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Readers Shop
          </span>
        </Link>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="books"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Books
              </Link>
            </li>
            <li>
              <Link
                to="authors"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Authors
              </Link>
            </li>
            <li>
              <Link
                to="cart"
                className="flex gap-2 items-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <AiOutlineShoppingCart className="h-5 w-5" /> Cart
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="py-2 pl-3 pr-4 flex gap-1 items-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <BiLogOut className="h-5 w-5" /> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
