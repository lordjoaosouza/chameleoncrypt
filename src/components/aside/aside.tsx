'use client'

import { useState } from 'react'

import { Separator } from '../ui/separator'
import { AsideContent } from './aside-content'
import { AsideFooter } from './aside-footer'
import { AsideHeader } from './aside-header'

export default function Aside() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={'flex'}>
      <div
        className={`text-primaryText flex h-screen flex-col items-center gap-16 bg-background px-4 py-8 transition-all duration-300 ${collapsed ? 'w-16' : 'w-32'}`}
      >
        <AsideHeader collapsed={collapsed} setCollapsed={setCollapsed} />

        <AsideContent collapsed={collapsed} />

        <AsideFooter collapsed={collapsed} />
      </div>

      <Separator orientation={'vertical'} />
    </div>
  )
}
