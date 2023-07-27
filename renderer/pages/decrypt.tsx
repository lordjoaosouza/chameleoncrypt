import React from 'react'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import EncryptDecrypt from '../components/EncryptDecrypt/EncryptDecrypt'

export default function DecryptPage() {
  return (
    <React.Fragment>
      <Head>
        <title>ChameleonCrypt - Decrypt</title>
      </Head>
      <GlobalStyle />
      <Navbar />
      <EncryptDecrypt
        title='Decrypt'
        actionTitle='decrypt'
        icon='HiLockOpen'
        buttonText='Decrypt'
      />
    </React.Fragment>
  )
}
