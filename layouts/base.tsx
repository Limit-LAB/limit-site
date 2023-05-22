import { FC, PropsWithChildren, useState } from 'react'
import Image from 'next/image'
import logo from '~/public/logo_fixed.svg'
import logoNoText from '~/public/logo_no_text.png'
import { Inter } from 'next/font/google'
import { Button } from '~/components/common/button'
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineTwitter,
  AiFillGithub,
} from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'

const inter = Inter({
  subsets: ['latin'],
})

const navitems = [
  {
    name: 'PromptC',
  },
  {
    name: 'Pricing',
  },
  {
    name: 'Careers',
  },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="container m-auto p-6 flex h-20 items-center gap-6">
      <Image src={logo} alt="Limit Lab" width={60} height={60} />
      <ul className="hidden md:flex text-sm text-gray-700 gap-6 font-medium">
        {navitems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <AiOutlineMenu
        className="md:hidden text-2xl ml-auto"
        onClick={() => setIsMenuOpen(true)}
      />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute inset-0 bg-white flex flex-col items-end p-6 gap-6"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
          >
            <AiOutlineClose
              className="text-2xl"
              onClick={() => setIsMenuOpen(false)}
            />
            <ul className="flex flex-col text-sm text-gray-700 gap-6 font-medium items-end">
              {navitems.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
            <Button>Start for free</Button>
          </motion.div>
        )}
      </AnimatePresence>
      <Button className="ml-auto hidden md:flex">Start for free</Button>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="py-8 px-10 md:px-20 bg-[#3a4c5c] text-white">
      <div className="container m-auto gap-6 flex flex-col">
        <div className="flex items-center -ml-2">
          <Image src={logoNoText} alt="Limit Lab" width={40} height={40} />
          Limit-LAB
        </div>
        <div className="flex gap-4 text-2xl">
          <AiFillGithub />
          <AiOutlineTwitter />
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

const BaseLayout: FC<PropsWithChildren> = props => {
  return (
    <div className={inter.className}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default BaseLayout
