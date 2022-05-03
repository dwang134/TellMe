// components/layout.js

import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/Head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>TellMe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className= 'container mx-auto'>
        <div className= 'grid md:grid-cols-2 bg-slate-700 gap-20 '>
        {children}
        </div>
      </main>
      <Footer />
    </>
  );
}