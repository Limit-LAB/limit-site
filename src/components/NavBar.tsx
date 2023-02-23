import { defineVFC } from '@core/helper'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useScrollLock } from '@mantine/hooks'
import Image from 'next/image'
import ImgLimitLabLogo from '../public/limit-lab-log.svg'

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
      className={`flex font-display font-semibold transition-all overflow-hidden
      <sm:(h-full fixed z-1 top-14 left-0 w-0 overflow-x-hidden bg-background flex flex-col pt-4 text-4xl)
      sm:(space-x-2 text-neutral-600) 
      ${showMenu ? '<sm:(w-full px-8 absolute bottom-0 left-0 h-screen)  ' : ''}`}
    >
      {Object.entries(navs).map(([name, path],) => (
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
      className="font-display w-full px-6 py-4
      backdrop-blur-md bg-background/30 border-background/90 backdrop-blur bg-background  
      border border-2 border-solid z-50
      fixed sm:(p-8 h-16) md:(h-24 px-18)"
    ><div className="flex  justify-between items-center max-w-screen-lg mx-auto">
        <Link className="font-bold flex flex-row items-center -ml-3" href="/" onClick={() => setShowMenu(false)} >
          <Image src={ImgLimitLabLogo} alt="logo" width={40} height={40} />
          <span className="font-light"> / </span>
          <span className="text-xl ml-1 md:(text-2xl ml-2)"> LIMIT IM</span>
        </Link>
        {openBtn}
        {menu}
      </div>

    </header>
  )
})

export default NavBar
