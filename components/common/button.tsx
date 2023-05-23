import { FC, PropsWithChildren } from 'react'
import { twJoin } from 'tailwind-merge'

const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white font-medium',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  success: 'bg-green-500 hover:bg-green-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
  warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
  info: 'bg-blue-500 hover:bg-blue-600 text-white',
  light: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
  dark: 'bg-gray-800 hover:bg-gray-900 text-white'
}

type ButtonVariant = keyof typeof variants

export interface ButtonProps extends PropsWithChildren {
  variant?: ButtonVariant
  className?: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = props => {
  return (
    <button
      onClick={props.onClick}
      className={twJoin(
        'inline-flex items-center rounded-lg px-3 py-1.5 text-sm',
        variants[props.variant || 'primary'],
        props.className
      )}
    >
      {props.children}
    </button>
  )
}
