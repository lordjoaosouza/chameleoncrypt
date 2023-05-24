import React from 'react'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'

export default function Encrypt() {
  return (
    <React.Fragment>
      <Head>
        <title>ChameleonCrypt - Criptografar</title>
      </Head>
      <GlobalStyle />
      <Navbar />
    </React.Fragment>
  )
}
