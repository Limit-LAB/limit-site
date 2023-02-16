import { defineVFC } from '@core/helper'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import type { MouseEventHandler } from 'react'

type Variant = 'primary' | 'secondary' | 'text' | "base"

const buttonBaseStyleNormal = `
  py-2 px-4 align-middle cursor-pointer 
  flex items-center font-display font-bold transition 
  rounded-full
`

const buttonStyle = {
  primary: " border-2 border-solid  bg-primary border-primary hover:(bg-background text-primary) text-background",
  secondary: " border-2 border-solid bg-background border-primary hover:(bg-primary text-background) text-primary",
  text: " border-2 border-solid underline bg-background border-background hover:text-primary",
  base: ""
}

const Button = defineVFC<{
  href?: string
  text?: string
  icon?: string | React.ReactNode
  variant?: Variant
  children?: React.ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
  replaceClassName?: string | boolean
}>(({ children, variant, className: extClassName, href, icon, text, onClick, replaceClassName }) => {

  const className =
    // replaceClassName is string
    (typeof replaceClassName == 'string' && replaceClassName)
    || // replaceClassName is true
    (typeof replaceClassName == 'boolean' && replaceClassName && extClassName)
    || // base style + variant style
    (`${buttonBaseStyleNormal} ${buttonStyle[variant || 'primary']} ${extClassName}`)

  const buttonChildren = <>
    {children ? children : text}
    {icon && typeof icon == 'string' && <Icon inline icon={icon} width={18} className="ml-2" />}
    {icon && typeof icon != 'string' && icon}
  </>
  return href
    ? <Link onClick={onClick} href={href} className={className} >{buttonChildren}</Link>
    : <button onClick={onClick} className={className}>{buttonChildren}</button>
})

export default Button
