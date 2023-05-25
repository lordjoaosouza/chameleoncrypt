import React from 'react'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import ProductionHero from '../components/ProductionHero/ProductionHero'

export default function Production() {
  return (
    <React.Fragment>
      <Head>
        <title>ChameleonCrypt - Em Produção</title>
      </Head>
      <GlobalStyle />
      <Navbar />
      <ProductionHero />
    </React.Fragment>
  )
}
