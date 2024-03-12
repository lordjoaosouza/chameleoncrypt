import './globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import React from 'react'

import { ThemeProvider } from '../components/theme/theme-provider'

export const metadata: Metadata = {
  title: 'Chameleoncrypt',
  description: 'Protect your data easily!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
