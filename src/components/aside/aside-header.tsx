interface AsideHeaderProps {
  collapsed: boolean
}

export function AsideHeader(props: AsideHeaderProps) {
  return (
    <div className={'flex w-full items-center justify-center gap-4'}>
      {props.collapsed ? <p id={'small'}>logo</p> : <p id={'full'}>logo</p>}
    </div>
  )
}
