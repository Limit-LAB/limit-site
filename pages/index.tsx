import { NextPageWithLayout } from './_app'
import BaseLayout from '~/layouts/base'
import { Button } from '~/components/common/button'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { twJoin } from 'tailwind-merge'
import Link from 'next/link'
import Image from 'next/image'
import IconReact from '~/public/tech/react.webp'
import IconGithub from '~/public/tech/github.webp'
import IconTypeScript from '~/public/tech/typescript.webp'
import { RxArrowTopRight } from 'react-icons/rx'
import { FC } from 'react'
import LimitSiteHead from '~/components/common/head'

export interface CardProps {
  title: string
  description: string
  link: string
}

export const Card: FC<CardProps> = props => {
  return (
    <section
      onClick={() => window.open(props.link, '_blank')}
      className="cursor-pointer flex-1 p-4 rounded-lg border-gray-200 border gap-4 flex flex-col bg-[#3c3c3c] col-span-4 md:col-span-2 lg:col-span-1"
    >
      <h2 className="text-4xl">{props.title}</h2>
      <p className="opacity-80">{props.description}</p>
      <Link href={props.link} target="_blank" className="mt-auto">
        <RxArrowTopRight className="text-2xl" />
      </Link>
    </section>
  )
}

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <LimitSiteHead />
      <section className="container w-fit m-auto text-center flex flex-col gap-5 py-12 px-2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          Our mission is to shape <br /> an{' '}
          <span className="text-blue-600">AI-powered</span> future.
        </h2>
        <p className="text-xl text-gray-400">
          Next-generation prompt platform. Embracing the LLM era with
          confidence.
        </p>
        <div className="text-center">
          <Button className="px-5 py-2.5">
            Coming soon
            {/*<AiOutlineArrowRight className="ml-2 text-lg" />*/}
          </Button>
          <Link target="_blank" href={'https://translate.limit.dev'}>
            <Button
              className="px-5 py-2.5"
              style={{ marginLeft: '10px' }}
              variant={'light'}
            >
              Try our Translator
              {/*<AiOutlineArrowRight className="ml-2 text-lg" />*/}
            </Button>
          </Link>
        </div>
      </section>
      <figure className="flex items-center justify-center bg-blue-600 text-white w-full">
        <p className="container p-6 text-xl lg:text-2xl text-center">
          Join our community and contribute to an awesome prompt ecosystem!
        </p>
      </figure>
      <div className="container m-auto py-10 px-6">
        <section
          className={twJoin(
            'p-6 lg:p-12 bg-[#333] text-white rounded-lg flex flex-col gap-4'
          )}
        >
          <div className="md:flex justify-between flex-wrap md:flex-nowrap gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl">
                Our codes make
                <br /> life <span className="text-blue-500">Easier</span>
              </h2>
              <p className="opacity-80">
                Interested in us? Figure out what we are doing.
              </p>
              <Link href={'https://github.com/Limit-LAB'}>
                <Button
                  variant="secondary"
                  className="bg-[#3c3c3c] border-gray-200 border"
                >
                  View on GitHub{' '}
                  <AiOutlineArrowRight className="ml-2 text-lg" />
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
          <div className="mt-6 gap-8 grid grid-cols-4">
            <Card
              title="promptc"
              description="promptc is a project aiming to help developers focus on prompts instead of writing code. It makes prompts 'prompt once, run everywhere'."
              link="https://github.com/promptc"
            />
            <Card
              title="Prompt Hub"
              description="Platform for creating, sharing, arranging, evaluating and managing prompts. Revolution the way of Prompt Engineering."
              link="https://github.com/limit-lab"
            />
            <Card
              title="Translator"
              description="Translate texts into different languages with powerful LLM AI. Based on promptc."
              link="https://translate.limit.dev"
            />
            <Card
              title="Orkas"
              description="Decentralised MQ implementation with SWIM, CRDT and Limlog. This crate depends on Tokio."
              link="https://github.com/Limit-LAB/Orkas"
            />
            <Card
              title="Cetacea"
              description="The next generation protocol for decentralised communication. Provide a decentralised distributed network for federated communication."
              link="https://github.com/Limit-LAB/Cetacea-Proto"
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
