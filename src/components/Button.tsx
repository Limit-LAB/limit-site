import { defineVFC } from '@core/helper'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import type { MouseEventHandler } from 'react'

type Variant = 'primary' | 'secondary' | 'text'

const buttonBaseStyleNormal = `
  p-3 align-middle cursor-pointer flex items-center font-display font-bold transition border-2 border-solid rounded
`

const buttonStyle = {
  primary: " bg-primary border-primary hover:(bg-background text-primary) text-background",
  secondary: " bg-background border-primary hover:(bg-primary text-background) text-primary",
  text: " underline bg-background border-background hover:text-primary"
}

const Button = defineVFC<{
  href?: string
  text?: string
  icon?: string | React.ReactNode
  variant?: Variant
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
}>(({ children, variant, className: extClassName, href, icon, text, onClick }) => {
  const className = `${buttonBaseStyleNormal} ${buttonStyle[variant || 'primary']}`
  const buttonChildren = <>
    {children ? children : text}
    {icon && typeof icon == 'string' && <Icon inline icon={icon} width={18} className="ml-2" />}
    {icon && typeof icon != 'string' && icon}
  </>
  return href
    ? <Link onClick={onClick} href={href} className={`${className} ${extClassName}`} >{buttonChildren}</Link>
    : <button onClick={onClick} className={`${className} ${extClassName}`}>{buttonChildren}</button>
})

export default Button
