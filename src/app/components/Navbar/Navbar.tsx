'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Logo } from './Logo'

const pagePaths = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Faq',
    url: '/faq'
  },
  {
    label: 'Documentation',
    url: '#'
  },
  {
    label: 'Support Us',
    url: '/donate'
  }
]

export const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const showMenu = (): void => {
    setOpen(!open)
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo className="flex items-center" />
        <button
          onClick={showMenu}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <Bars3Icon className="w-5 h-5" />
        </button>
        <div
          className={`${
            open
              ? 'w-full md:block md:w-auto'
              : 'hidden w-full md:block md:w-auto'
          }`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {pagePaths.map(({ label, url }) => (
              <li onClick={() => setOpen(false)} key={url}>
                <Link
                  href={url}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 focus:text-blue-700 dark:focus:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
