import { defineVFC } from '@core/helper'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useScrollLock } from '@mantine/hooks'

const className = 'cursor-pointer sm:hidden hover:text-neutral-600 z-10'

const navs = {
  Discover: '/discover',
  User: '/user',
  Admin: '/admin',
  Developer: '/developer'
}

const NavBar = defineVFC(() => {
  const [showMenu, setShowMenu] = useScrollLock(false)

  const openBtn = showMenu ? (
    <Icon
      className={className}
      icon="material-symbols:close"
      width={24}
      onClick={() => {
        setShowMenu(false)
      }}
    />
  ) : (
    <Icon
      className={className}
      icon="mdi:hamburger-menu"
      width={24}
      onClick={() => {
        setShowMenu(true)
      }}
    />
  )

  const menu = (
    <div
      className={`flex font-display font-semibold transition-all
      <sm:(h-full fixed z-1 top-14 left-0 w-0 overflow-x-hidden bg-background flex flex-col pt-4 text-4xl)
      sm:(space-x-2 text-neutral-600)
      ${showMenu ? '<sm:(w-full px-8)' : ''}`}
    >
      {Object.entries(navs).map(([name, path]) => (
        <nav key={name}>
          <Link
            className="text-inherit p-2 transition block hover:text-primary"
            href={path}
            onClick={() => setShowMenu(false)}
          >
            {name}
          </Link>
        </nav>
      ))}
    </div>
  )

  return (
    <header
      className="bg-background flex font-display h-14 w-full p-8
      z-10 justify-between items-center
      fixed
      sm:(p-10 h-28) md:p-14 "
    >
      <Link className="font-bold" href="/" onClick={() => setShowMenu(false)}>
        LIMIT IM
      </Link>
      {openBtn}
      {menu}
    </header>
  )
})

export default NavBar
