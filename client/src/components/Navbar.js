import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ChatBot from './ChatBot'

const Navbar = () => {
  const [mobMenu, setMobMenu] = useState(false)
  const [toggleChat, setToggleChat] = useState(false)

  const toggleMenu = () => {
    setMobMenu(!mobMenu)
  }

  return (
    <nav className="bg-white shadow-md border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 sticky top-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'dark:text-white text-black font-bold tracking-wide text-2xl'
              : 'dark:text-white text-black font-bold tracking-wide text-2xl'
          }
        >
          TogetherBridges
        </NavLink>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${mobMenu ? '' : 'hidden'}`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li onClick={toggleMenu}>
              <NavLink
                to="/"
                href="#"
                aria-current="page"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-700 dark:text-blue-300'
                    : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink
                to="/events"
                href="#"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-700 dark:text-blue-300'
                    : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }
              >
                Events
              </NavLink>
            </li>
            <button onClick={() => setToggleChat(true)}>chat bot</button>
            <li onClick={toggleMenu}>
              <NavLink
                to="/ngo"
                href="#"
                aria-current="page"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-700 dark:text-blue-300'
                    : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }
              >
                All NGOs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {toggleChat && <ChatBot setToggleChat={setToggleChat} />}
    </nav>
  )
}

export default Navbar
