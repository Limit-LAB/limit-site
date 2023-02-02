import { defineVFC } from '@core/helper'
import { Icon } from '@iconify/react'

const Footer = defineVFC(() => {
  return (
    <footer className=" font-display  w-full px-8 text-neutral-600">
      <div className="border-t border-solid flex border-t-neutral-300 py-8 text-neutral-400 justify-center">
        <a href="https://github.com/LIMIT-LAB" className="text-inherit">
          <Icon
            icon="mdi:github"
            width={28}
            className="hover:text-neutral-500"
          />
        </a>
      </div>
    </footer>
  )
})

export default Footer
