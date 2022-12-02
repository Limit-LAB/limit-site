import Button from '@comps/Button'
import { definePage, defineVFC } from '@core/helper'
import { Icon } from '@iconify/react'

const Description = defineVFC<{
  icon: string
  title: string
  description: string
}>(({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon width={64} className="mb-8 text-neutral-700" icon={icon} />
      <h4 className="text-xl text-primary">{title}</h4>
      <p className="text-sm text-center max-w-64">{description}</p>
    </div>
  )
})

const IndexPage = definePage(() => {
  return (
    <>
      <h1 className="font-extrabold my-6 text-5xl">The future of chatting</h1>
      <p>
        Incididunt consequat deserunt irure nostrud elit consectetur eiusmod
        proident do sint reprehenderit ad dolore exercitation. Reprehenderit
        enim occaecat deserunt eiusmod tempor adipisicing adipisicing deserunt
        id.
      </p>
      <div className="flex  sm:(space-x-2) <sm:(space-x-2) ">
        <Button text="Try web" icon="material-symbols:arrow-right-alt" />

        <Button
          text="Getting started"
          icon="material-symbols:arrow-right-alt"
          href="/user"
        />
      </div>

      <div className="mt-36 sm:mt-48">
        <h2 className="font-bold text-3xl sm:mb-18 <sm:mb-12">Why LIMIT?</h2>
        <div className="md:(grid grid-cols-3) <md:(flex flex-col space-y-8) ">
          <Description
            icon="mdi:eye-lock-outline"
            title="Truly encrypted"
            description="All messages are E2E encrypted — include group chats, no one will sneak peek on you, except me"
          />
          <Description
            icon="mdi:handshake-outline"
            title="User friendly"
            description="Or is it?"
          />
          <Description
            icon="carbon:network-4"
            title="Federated"
            description="TO BE IMPLEMENTED" // TODO
          />
        </div>
      </div>
    </>
  )
})

export default IndexPage
