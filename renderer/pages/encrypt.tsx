import React from 'react'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import EncryptDecrypt from '../components/EncryptDecrypt/EncryptDecrypt'

export default function Encrypt() {
  return (
    <React.Fragment>
      <Head>
        <title>ChameleonCrypt - Criptografar</title>
      </Head>
      <GlobalStyle />
      <Navbar />
      <EncryptDecrypt
        title='Criptografe'
        actionTitle='criptografia'
        icon='HiLockClosed'
        buttonText='Criptografar'
      />
    </React.Fragment>
  )
}
