import { defineVFC } from '@core/helper'
import Image from 'next/image'
import { useOs } from '@mantine/hooks'
import Button from '@comps/Button'
import { useEffect, useState } from 'react'

const UserPage = defineVFC(() => {
  const [os, setOs] = useState('undetermined')

  useEffect(() => {
    setOs(useOs())
  }, [])

  const iosBtnText = 'Download via App Store'

  let button
  let title
  if (os === 'android') {
    button = (
      <Button
        href=""
        text="via Download play store"
        icon="ic:twotone-android"
      />
    )
    title = 'LIMIT IM for Android'
  } else if (os === 'ios') {
    button = <Button href="" text={iosBtnText} icon="ri:app-store-fill" />
    title = 'LIMIT IM for iPhone/iPad'
  } else if (os === 'linux' || os === 'windows') {
    button = (
      <Button href="" text="Download PC client" icon="ic:outline-computer" />
    )
    title = `LIMIT IM for ${os}`
  } else if (os === 'macos') {
    button = <Button href="" text="Download" icon="ic:baseline-apple" />
    title = 'LIMIT IM for macOS'
  }
  return (
    <>
      <div className="flex flex-col space-y-6 items-center">
        <Image
          src="https://placekitten.com/200/300"
          width={200}
          height={300}
          alt="screenshot"
        />
        <h2 className="text-2xl">{title}</h2>

        {button}
      </div>
    </>
  )
})

export default UserPage
