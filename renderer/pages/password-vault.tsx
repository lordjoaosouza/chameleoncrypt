import React from 'react'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import PasswordVault from '../components/PasswordVault/PasswordVault'

export default function Production() {
  return (
    <React.Fragment>
      <Head>
        <title>ChameleonCrypt - Cofre de Senhas</title>
      </Head>
      <GlobalStyle />
      <Navbar />
      <PasswordVault />
    </React.Fragment>
  )
}
