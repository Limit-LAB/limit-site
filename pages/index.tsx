import { NextPageWithLayout } from './_app'
import BaseLayout from '~/layouts/base'
import { Button } from '~/components/common/button'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Roboto_Mono } from 'next/font/google'
import { twJoin } from 'tailwind-merge'
import Link from 'next/link'
import Image from 'next/image'
import IconReact from '~/public/tech/react.webp'
import IconGithub from '~/public/tech/github.webp'
import IconTypeScript from '~/public/tech/typescript.webp'
import { RxArrowTopRight } from 'react-icons/rx'
import { FC } from 'react'
import LimitSiteHead from '~/components/common/head'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
})

export interface CardProps {
  title: string
  description: string
}

export const Card: FC<CardProps> = props => {
  return (
    <section className="flex-1 p-4 rounded-lg border-gray-200 border gap-4 flex flex-col bg-[#3c3c3c]">
      <h2 className="text-4xl">{props.title}</h2>
      <p>{props.description}</p>
      <RxArrowTopRight className="text-2xl" />
    </section>
  )
}

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <LimitSiteHead />
      <section className="container w-fit m-auto text-center flex flex-col gap-5 py-12 px-2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          Limit-LAB is on a mission to shape <br /> an{' '}
          <span className="text-blue-600">ai-powered</span> future.
        </h2>
        <p className="text-xl text-gray-400">
          next-generation open source, community-driven prompt-base for
          professionals.
        </p>
        <div className="text-center">
          <Button className="px-5 py-2.5">
            Start for free
            <AiOutlineArrowRight className="ml-2 text-lg" />
          </Button>
        </div>
        <p className="text-gray-400 text-sm">No credit card required.</p>
      </section>
      <figure className="flex items-center justify-center bg-blue-600 text-white w-full">
        <p className="container p-6 text-xl lg:text-2xl text-center">
          Join our 400,000+ person community and contribute to a more private
          and decentralized internet!
        </p>
      </figure>
      <div className="container m-auto py-10 px-6">
        <section
          className={twJoin(
            robotoMono.className,
            'p-12 bg-[#333] text-white rounded-lg flex flex-col gap-4'
          )}
        >
          <div className="md:flex justify-between flex-wrap md:flex-nowrap gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="md:text-2xl lg:text-3xl">
                All our code are <br /> belongs to{' '}
                <span className="text-blue-500">you</span>
              </h2>
              <p>Making our code visible to the public. Awesome!</p>
              <Link href={'https://github.com/Limit-LAB'}>
                <Button
                  variant="secondary"
                  className="bg-[#3c3c3c] border-gray-200 border"
                >
                  View on GitHub
                </Button>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-between gap-8">
              <div>
                <Image src={IconReact} width={150} height={130} alt="react" />
              </div>
              <div>
                <Image
                  src={IconTypeScript}
                  width={140}
                  height={140}
                  alt="typescript"
                />
              </div>
              <div>
                <Image src={IconGithub} width={150} height={150} alt="github" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-8 flex-wrap">
            <Card
              title="Orkas"
              description="Decentralized MQ implementation with SWIM, CRDT and Limlog. This crate depends on Tokio."
            />
            <Card
              title="Cetacea Protocol"
              description="The next generation protocol for decentralized communication. it uses Orkas to provide a decentralized distributed network for federated communication."
            />
          </div>
        </section>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>
}

export default Home
