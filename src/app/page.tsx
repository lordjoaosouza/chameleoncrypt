'use client'

import Aside from '../components/aside/aside'

export default function Home() {
  return (
    <div className={'flex h-screen'}>
      <Aside />

      <div className={'flex w-full items-center justify-center gap-16 text-white'}></div>
    </div>
  )
}
