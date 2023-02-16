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

const TitleGradientStyle = {
  background: 'linear-gradient(188.88deg, #0080FB 6.75%, #153CA9 124.65%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
}

const IndexPage = definePage(() => {
  return (
    <>
      <h1 className="font-extrabold my-6 <md:text-6xl md:text-8xl ">
        The <span style={TitleGradientStyle}>future</span> of chatting
      </h1>
      <p>
        We are well versed in distributed systems, committed to <span className='underline'>breaking through traditional social <span className="text-black">limit</span>ations and
          sparking new change through decentralisation & Web3.</span>
      </p>
      <div className="flex sm:(space-x-4) <sm:(space-x-4) ">
        <div className='rounded-full bg-light relative w-46'>
          <Button
            text="Getting started"
            icon="material-symbols:arrow-top-right"
            href="/user"
            variant="base"
            className={"bg-primary text-white h-full absolute bottom-0 left-0 " +
              "transform delay-100 ease-linear duration-150 hover:translate-x-1 " +
              "hover:bg-light"}
          />
        </div>
        <Button variant="text" className="group" href="https://github.com/Limit-LAB">
          <span className="-ml-1 bg-background transform translate-x-6 duration-150 ease-linear hover:(bg-none) group-hover:translate-x-2">know our lab</span>
          <Icon inline icon={"material-symbols:arrow-right-alt"} width={18} className="ml-2" />
        </Button>
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
