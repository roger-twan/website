import { default as NextHead } from 'next/head'

export interface HeadProps {
  title?: string
  description?: string
  keywords?: string
}

const Head = (props: HeadProps) => {
  const { title } = props
  let fullTitle = 'Roger Twan'

  if (title) {
    fullTitle = `${title} | ${fullTitle}`
  }

  return (
    <NextHead>
      <title>{fullTitle}</title>
      {props.description && (
        <meta name="description" content={props.description} />
      )}
      {props.keywords && <meta name="keywords" content={props.keywords} />}
    </NextHead>
  )
}

export default Head
