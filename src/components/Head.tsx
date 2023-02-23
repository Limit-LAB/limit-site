import Head from "next/head"
import LimitLABLogo from "@public/limit-lab-log.svg"

import icon57 from "@public/apple-icon-57x57.png"
import icon60 from "@public/apple-icon-60x60.png"
import icon72 from "@public/apple-icon-72x72.png"
import icon76 from "@public/apple-icon-76x76.png"
import icon114 from "@public/apple-icon-114x114.png"
import icon120 from "@public/apple-icon-120x120.png"
import icon144 from "@public/apple-icon-144x144.png"
import icon152 from "@public/apple-icon-152x152.png"
import icon180 from "@public/apple-icon-180x180.png"
import icon192 from "@public/android-icon-192x192.png"
import icon16 from "@public/favicon-16x16.png"
import icon32 from "@public/favicon-32x32.png"
import icon96 from "@public/favicon-96x96.png"
import iconMS144 from "@public/ms-icon-144x144.png"
// import manifestJSON from "@public/manifest.json"

const LimitSiteHead = ({
  title,
  description,
  keywords,
  imageUrl,
  imageAlt,
  url,
  type,
  siteName,
  creator,
  twitterCard,
  // faviconPath,
}: {
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
}) => {

  title = title || "Limit LAB"
  description = description || "A fully decentralised, open source, secure chat software"
  imageUrl = imageUrl || LimitLABLogo.src
  imageAlt = imageAlt || "Limit LAB official site"
  url = url || "https://limit.dev"
  type = type || "website"
  siteName = siteName || "Limit LAB"
  creator = creator || "@limit_lab"
  twitterCard = twitterCard || "summary"

  return <Head>

    <link rel="apple-touch-icon" sizes="57x57" href={icon57.src} />
    <link rel="apple-touch-icon" sizes="60x60" href={icon60.src} />
    <link rel="apple-touch-icon" sizes="72x72" href={icon72.src} />
    <link rel="apple-touch-icon" sizes="76x76" href={icon76.src} />
    <link rel="apple-touch-icon" sizes="114x114" href={icon114.src} />
    <link rel="apple-touch-icon" sizes="120x120" href={icon120.src} />
    <link rel="apple-touch-icon" sizes="144x144" href={icon144.src} />
    <link rel="apple-touch-icon" sizes="152x152" href={icon152.src} />
    <link rel="apple-touch-icon" sizes="180x180" href={icon180.src} />
    <link rel="icon" type="image/png" sizes="192x192" href={icon192.src} />
    <link rel="icon" type="image/png" sizes="32x32" href={icon32.src} />
    <link rel="icon" type="image/png" sizes="96x96" href={icon96.src} />
    <link rel="icon" type="image/png" sizes="16x16" href={icon16.src} />
    {/* <link rel="manifest" href="/manifest.json" /> */}

    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content={iconMS144.src} />

    <title>{title}</title>
    <meta name="description" content={description} />
    {
      keywords && (
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(",") : keywords} />
      )
    }

    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content={imageAlt} />
    <meta property="og:site_name" content={siteName || title} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content={type || "website"} />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />

    <meta name="twitter:card" content={twitterCard} />
    <meta name="twitter:image:src" content={imageUrl} />
    <meta name="twitter:site" content={siteName || title} />
    <meta name="twitter:creator" content={creator} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />


    <meta name="theme-color" content="#ffffff" />
  </Head>
}

export default LimitSiteHead