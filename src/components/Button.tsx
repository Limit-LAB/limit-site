import { defineVFC } from '@core/helper'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import type { MouseEventHandler } from 'react'

const className = `p-3 align-middle
  bg-primary cursor-pointer
  flex items-center
  text-background font-display font-bold transition
  border-primary border-2 border-solid rounded
  hover:(bg-background text-primary)
`

const Button = defineVFC<{
  href?: string
  text?: string
  icon?: string
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
}>(({ children, className: extClassName, href, icon, text, onClick }) => {
  return href ? (
    <Link
      onClick={onClick}
      href={href}
      className={`${extClassName} ${className}`}
    >
      {children ? children : <span>{text}</span>}
      {icon && <Icon inline icon={icon} width={18} className="ml-2" />}
    </Link>
  ) : (
    <button onClick={onClick} className={`${extClassName} ${className}`}>
      {children ? children : <span>{text}</span>}
      {icon && <Icon inline icon={icon} width={18} className="ml-2" />}
    </button>
  )
})

export default Button
