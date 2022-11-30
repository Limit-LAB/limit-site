import { defineVFC } from '@core/helper'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useState } from 'react'

const iconClasses = 'cursor-pointer sm:hidden hover:text-gray z-10'

const navs = {
  About: '/about',
  User: '/user',
  Admin: '/admin',
  Developer: '/developer'
}

const NavBar = defineVFC(() => {
  const [isOpen, setIsOpen] = useState(false)

  const openBtn = isOpen ? (
    <Icon
      className={iconClasses}
      icon="material-symbols:close"
      width={24}
      onClick={() => setIsOpen(false)}
    />
  ) : (
    <Icon
      className={iconClasses}
      icon="mdi:hamburger-menu"
      width={24}
      onClick={() => setIsOpen(true)}
    />
  )

  const menu = (
    <div
      className={`flex font-display font-semibold transition-all
      <sm:(h-full fixed z-1 top-20 left-0 w-0 overflow-x-hidden bg-background flex flex-col pt-4 text-4xl)
      sm:(space-x-4 text-neutral-600)
      ${isOpen ? '<sm:(w-full px-8)' : ''}`}
    >
      {Object.entries(navs).map(([name, path]) => (
        <nav key={name}>
          <Link
            className="text-inherit p-2 transition block hover:text-primary"
            href={path}
          >
            {name}
          </Link>
        </nav>
      ))}
    </div>
  )

  return (
    <header className="flex font-display p-8 z-10 justify-between items-center sm:p-10 md:p-14">
      <h1 className="font-bold ">LIMIT IM</h1>
      {openBtn}
      {menu}
    </header>
  )
})

export default NavBar
