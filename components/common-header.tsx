import Head from 'next/head'

interface HeaderProps {
  title?: string
  description?: string
  keywords?: string
}

export default function CommonHeader(props: HeaderProps) {
  const { title } = props
  let fullTitle = "Roger's Website"

  if (title) {
    fullTitle = `${title} | ${fullTitle}`
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      {props.description && (
        <meta name="description" content={props.description} />
      )}
      {props.keywords && <meta name="keywords" content={props.keywords} />}
    </Head>
  )
}
