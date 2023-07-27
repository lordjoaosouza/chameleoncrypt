import React from 'react'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import EncryptDecrypt from '../components/EncryptDecrypt/EncryptDecrypt'

export default function Encrypt() {
  return (
    <React.Fragment>
      <Head>
        <title>ChameleonCrypt - Encrypt</title>
      </Head>
      <GlobalStyle />
      <Navbar />
      <EncryptDecrypt
        title='Encrypt'
        actionTitle='encrypt'
        icon='HiLockClosed'
        buttonText='Encrypt'
      />
    </React.Fragment>
  )
}
