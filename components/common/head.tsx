import Head from 'next/head'
import LimitLABLogo from '~/public/limit-lab-log.svg'
import ogImage from '~/public/logo.jpg'

import icon96 from '~/public/logo/favicon-96.png'
import icon64 from '~/public/logo/favicon-64.png'
import icon32 from '~/public/logo/favicon-32.png'
import icon16 from '~/public/logo/favicon-16.png'
import icon57 from '~/public/logo/favicon-57.png'
import icon114 from '~/public/logo/favicon-114.png'
import icon72 from '~/public/logo/favicon-72.png'
import icon144 from '~/public/logo/favicon-144.png'
import icon60 from '~/public/logo/favicon-160.png'
import icon120 from '~/public/logo/favicon-120.png'
import icon76 from '~/public/logo/favicon-76.png'
import icon152 from '~/public/logo/favicon-152.png'
import icon180 from '~/public/logo/favicon-180.png'

import { FC } from 'react'
// import manifestJSON from "~/public/manifest.json"

export interface LimitSiteHeadProps {
  title?: string
  description?: string
  keywords?: string | string[]
  imageUrl?: string
  imageAlt?: string
  url?: string
  type?: string
  siteName?: string
  creator?: string
  twitterCard?: string
  faviconPath?: string
}

const LimitSiteHead: FC<LimitSiteHeadProps> = props => {
  const {
    title = 'Limit-LAB',
    description = 'Limit-LAB is on a mission to shape an ai-powered future.',
    keywords,
    imageUrl = LimitLABLogo.src,
    imageAlt = 'Limit LAB official site',
    url = 'https://limit.dev',
    type = 'website',
    siteName = 'Limit-LAB',
    creator = '@limit_lab',
    twitterCard = 'summary'
  } = props
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="196x196"
        href="/favicon-192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="160x160"
        href="/favicon-160.png"
      />
      <link rel="icon" type="image/png" sizes="96x96" href={icon96.src} />
      <link rel="icon" type="image/png" sizes="64x64" href={icon64.src} />
      <link rel="icon" type="image/png" sizes="32x32" href={icon32.src} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon16.src} />
      <link rel="apple-touch-icon" href={icon57.src} />
      <link rel="apple-touch-icon" sizes="114x114" href={icon114.src} />
      <link rel="apple-touch-icon" sizes="72x72" href={icon72.src} />
      <link rel="apple-touch-icon" sizes="144x144" href={icon144.src} />
      <link rel="apple-touch-icon" sizes="60x60" href={icon60.src} />
      <link rel="apple-touch-icon" sizes="120x120" href={icon120.src} />
      <link rel="apple-touch-icon" sizes="76x76" href={icon76.src} />
      <link rel="apple-touch-icon" sizes="152x152" href={icon152.src} />
      <link rel="apple-touch-icon" sizes="180x180" href={icon180.src} />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content={icon144.src} />
      <meta name="msapplication-config" content="/logo/browserconfig.xml" />

      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && (
        <meta
          name="keywords"
          content={Array.isArray(keywords) ? keywords.join(',') : keywords}
        />
      )}

      <meta property="og:image" content={ogImage.src} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content={siteName || title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content={twitterCard} />
      <meta property="twitter:image" content={ogImage.src}></meta>
      <meta name="twitter:image:src" content={ogImage.src} />
      <meta name="twitter:site" content={siteName || title} />
      <meta name="twitter:creator" content={creator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default LimitSiteHead
