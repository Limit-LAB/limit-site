import Button from '@comps/Button'
import { definePage } from '@core/helper'
import { Icon } from '@iconify/react'
import type { LegacyRef } from 'react';
import { useEffect, useState } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { useWindowSize } from '../hooks/useWindowSize'
import ImgOrca from '../public/orca.jpg'
import ImgDecent from '../public/decentralized.jpg'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const TitleGradientStyle = {
  background: 'linear-gradient(188.88deg, #0080FB 6.75%, #153CA9 124.65%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
}

const IndexPage = definePage(() => {

  const scrollY = useScrollPosition(60)

  const { height: windowHeight, width: windowWidth } = useWindowSize()
  const [rocketInitScrollY, setRocketInitScrollY] = useState<number | undefined>()
  const [rocketPosition, setRocketPosition] = useState(0)

  const { ref: rocketMasterElementRef,
    inView: showRocket
  } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (showRocket && (typeof rocketInitScrollY) === "undefined") setRocketInitScrollY(scrollY + 200)
    if (showRocket && (typeof rocketInitScrollY) === "number") setRocketPosition(scrollY - (rocketInitScrollY as number))
  }, [rocketInitScrollY, scrollY, showRocket, windowHeight])

  return (
    <div >
      <h1 className="font-extrabold my-6 <md:text-6xl md:text-8xl " >
        The <span style={TitleGradientStyle}>future </span> of chatting
      </h1>
      <p className="leading-normal">
        We are well versed in distributed systems, committed to <span className="underline">breaking through traditional social  <span className="text-black">limit</span>ations and
          sparking new change through decentralisation & Web3.</span>
      </p>
      <div className="flex sm:(space-x-4) <sm:(space-x-4) flex-row justify-between md:justify-start ">
        <div className="rounded-full bg-light relative w-32 md:w-38">
          <Button
            text="Get started"
            icon="material-symbols:arrow-top-right"
            href="/user"
            variant="base"
            className={"bg-primary justify-between text-white h-full absolute bottom-0 left-0 break-all " +
              "transform delay-100 ease-linear duration-150 hover:translate-x-1 " +
              "hover:bg-light"}
          />
        </div>
        <Button variant="text" className="group mb-1 md:mb-0" href="https://github.com/Limit-LAB">
          <span className={
            " -ml-2 bg-background transform translate-x-6 duration-150 ease-linear " +
            " text-sm md:text-base " +
            " hover:(bg-none) group-hover:translate-x-2 "
          }
          >know our lab</span>
          <Icon inline icon={"material-symbols:arrow-right-alt"} width={18} className="ml-2" />
        </Button>
      </div>

      <div className="mt-46 md:mt-62 ">
        <div className="">
          <p className="-mb-10 font-semibold text-xl text-center">For daily, For life, For work</p>
          <p className=" font-semibold text-5xl text-center text-black">Chat, Play, Communication</p>
          <p className=" font-semibold text-center">
            No risk of entitlement, allowing security and privacy to accompany your daily routine</p>
        </div>
      </div>

      <div className="mt-10" >
        <div className="group pt-10 sm:pt-40 mt-10  " ref={(rocketMasterElementRef) as LegacyRef<HTMLDivElement>}>
          <div className="flex h-24 rounded-3xl flex-row items-center justify-around relative z-10" style={{ background: "linear-gradient(188.88deg, #0080FB 6.75%, #153CA9 124.65%)" }}>
            {showRocket ? <p className="text-8xl md:text-10xl absolute z-50" style={
              {
                left: rocketPosition + (windowWidth < 450 ? 50 : 0) || 0,
                bottom: rocketPosition + (windowWidth < 450 ? 50 : 0) || 0,
                opacity: (rocketPosition > 100) ? ((200 - rocketPosition) / 100) : 1
              }
            }>
              🚀
            </p> : null}
            <p className={
              "text-white/90 font-extrabold text-lg md:text-4xl p-4 ml-30" +
              " transform duration-300 ease-in-out delay-75 relative group-hover:(translate-x-6 text-white)"
            }> WE STARTUP, IN PROGRESS NOW!</p>
          </div>
        </div>
        <h2 className="mt-40 md:mt-60 font-bold text-3xl text-center">Constituents</h2>
        <p className="text-center mt-4">A secure system consists of these features, protocols, and functions.</p>
        <div className="overflow-hidden md:(h-80 mb-0) rounded-3xl md: shadow shadow-xl group bg-white  hover:cursor-pointer flex flex-col md:flex-row justify-between items-center" >
          <div className="p-10 ">
            <h3 className="text-4xl">Orkas</h3>
            <p className="leading-normal mt-4">
              Decentralized MQ implementation with SWIM and CRDT, the core building blocks of decentralized social services.
            </p>
            <Button text="Github Repo" variant="primary" className="group-hover:(bg-background text-primary)" />
          </div>
          <div className="overflow-hidden rounded-b-3xl group-hover:rounded-b-3xl">
            <Image src={ImgOrca} alt="orca" height={350}
              className="transform transition ease-out delay-75 group-hover:-translate-y-1 group-hover:(scale-110 rounded-b-3xl) duration-500 opacity-80 rounded-b-3xl" />
          </div>
        </div>
        {/* blocks for features description  */}
        <div className="md:flex space-x-0 md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-20">
          <div className="w-full">
            <div className="relative flex flex-row-reverse bg-black h-90 mt-2  w-full group hover:cursor-pointer rounded-3xl overflow-hidden">
              <div className="p-10 absolute left-0 z-30 text-white ">
                <h3 className="text-3xl md:text-4xl">Decentralization</h3>
                <p className="leading-normal mt-4 text-white">
                  In addition to chat, there are DAOs, smart contracts. Total and Web3 applications, everything!
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden w-auto h-auto">
                <Image src={ImgDecent} alt="decentralization" height={400}
                  className="rounded-full md:rounded-3xl transform transition ease-out delay-75 group-hover:scale-110 duration-500 opacity-30 " />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="relative flex flex-row-reverse bg-lime-400 h-90 mt-2 rounded-3xl w-full overflow-hidden group hover:cursor-pointer"
            >
              <div className="p-10 absolute left-0 z-30 ">
                <h3 className="text-4xl">Truly encrypted</h3>
                <p className="leading-normal mt-4 ">
                  All messages are E2E encrypted — include group chats, no one will sneak peek on you, except me
                </p>
                <div className="rounded-3xl transform transition ease-out group-hover:scale-110 duration-500 text-8xl md:text-9xl text-center ">
                  <span>🔒🔑</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
})

export default IndexPage
