import React from 'react'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>ChameleonCrypt</title>
      </Head>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </React.Fragment>
  )
}
