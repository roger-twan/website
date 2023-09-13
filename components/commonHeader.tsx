import Head from 'next/head'

interface HeaderProps {
  title?: string
}

export default function CommonHeader(props: HeaderProps) {
  const { title } = props
  let fullTitle = "Roger's Lab"

  if (title) {
    fullTitle = `${title} | ${fullTitle}`
  }

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  )
}
