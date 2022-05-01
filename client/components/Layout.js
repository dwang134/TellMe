// components/layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className= 'container mx-auto'>{children}</main>
      <Footer />
    </>
  )
}