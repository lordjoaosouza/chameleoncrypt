import React from 'react'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import PasswordVault from '../components/PasswordVault/PasswordVault'

export default function PasswordVaultPage() {
  return (
    <React.Fragment>
      <Head>
        <title>ChameleonCrypt - Password Vault</title>
      </Head>
      <GlobalStyle />
      <Navbar />
      <PasswordVault />
    </React.Fragment>
  )
}
