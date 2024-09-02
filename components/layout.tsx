import { PropsWithChildren } from 'react'
import Head, { HeadProps } from './head'
import Nav from './nav'

interface LayoutProps extends HeadProps {
  children?: React.ReactNode
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Head {...props} />
      <Nav />
      {props.children}
    </>
  )
}

export default Layout
