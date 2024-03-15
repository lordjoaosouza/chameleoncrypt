import React from 'react'

interface ContentProps {
  title: string
}

export default function Content({
  props,
  children,
}: Readonly<{ props: ContentProps; children: React.ReactNode }>) {
  return (
    <div className={'h-full w-full p-16'}>
      <div className={'flex w-full items-center justify-start'}>
        <h1 className={'text-lg font-semibold'}>{props.title}</h1>
      </div>

      <div className={'flex h-full items-center justify-center'}>{children}</div>
    </div>
  )
}
