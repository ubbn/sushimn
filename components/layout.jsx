import React from 'react'
import Header from './header'
import Footer from './footer'
// import Script from './script'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div id="home">{children}</div>
      <Footer />
    </>
  )
}
